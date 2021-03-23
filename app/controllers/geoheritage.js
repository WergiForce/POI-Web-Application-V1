"use strict";

const Geosite = require("../models/geosites");
const User = require("../models/user");

const Geoheritage = {
  home: {
    handler: function (request, h) {
      return h.view("home", { title: "Add a site" });
    },
  },
  report: {
    handler: async function (request, h) {
      const geoSite = await Geosite.find().populate("geologist").lean();
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
        const newSite = new Geosite({
          siteName: data.siteName,
          location: data.location,
          description: data.description,
          geologist: user._id,
        });
        await newSite.save();
        return h.redirect("/report");
      } catch (err) {
        return h.view("main", { errors: [{ message: err.message }] });
      }
    },
  },
};

module.exports = Geoheritage;