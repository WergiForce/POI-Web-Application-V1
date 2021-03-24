"use strict";

const Geosite = require("../models/geosites");
const User = require("../models/user");
const Theme = require("../models/theme");
const Joi = require("@hapi/joi");

const Geoheritage = {
  home: {
    handler: async function (request, h) {
      const theme = await Theme.find().lean();
      return h.view("home", { title: "Add a site", theme: theme });
    },
  },

  report: {
    handler: async function (request, h) {
      const geoSite = await Geosite.find().populate("geologist").populate('theme').lean();
      return h.view("report", {
        title: "Sites added to Date",
        geoSite: geoSite,
      });
    },
  },

  addSite: {
    handler: async function (request, h) {
      try {
        const id = request.auth.credentials.id;
        const user = await User.findById(id);
        const data = request.payload;
        const rawTheme = request.payload.theme;
        const theme = await Theme.findOne({
          themeTitle: rawTheme
        })
        const newSite = new Geosite({
          siteName: data.siteName,
          lat: data.lat,
          long: data.long,
          description: data.description,
          geologist: user._id,
          theme: theme._id,
        });
        await newSite.save();
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },

  deleteSite: {
    handler: async function (request, h) {
      try {
        const site = Geosite.findById(request.params._id);
        console.log("Removing Geoheritage Site " + site);
        await site.deleteOne();
        return h.redirect("/report");
      } catch (err) {
        return h.view('home', {errors: [{message: err.message}]});
      }
    },
  },

  showUpdatedSite: {
    handler: async function(request, h) {
      try {
        const id = request.params._id;
        const site = await Geosite.findById(id).lean();
        return h.view("update-site", { title: "Edit site", site: site });
      } catch (err) {
        return h.view("login", { errors: [{ message: err.message }]});
      }
    }
  },

  updateSite: {
    handler: async function(request, h) {
      try {
        const siteEdit = request.payload;
        const site = await Geosite.findById(request.params._id);
        site.siteName = siteEdit.siteName;
        site.lat = siteEdit.lat;
        site.long = siteEdit.long;
        site.description = siteEdit.description;
        await site.save();
        return h.redirect('/report');
      } catch (err) {
        return h.view('home', {errors: [{message: err.message}]});
      }
    }
  }
};

module.exports = Geoheritage;