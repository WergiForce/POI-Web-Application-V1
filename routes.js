"use strict";

const Accounts = require("./app/controllers/accounts");
const Geoheritage = require("./app/controllers/geoheritage");
const Gallery = require('./app/controllers/gallery');

module.exports = [
  { method: "GET", path: "/", config: Accounts.index },
  { method: "GET", path: "/signup", config: Accounts.showSignup },
  { method: "GET", path: "/login", config: Accounts.showLogin },
  { method: "GET", path: "/logout", config: Accounts.logout },
  { method: "POST", path: "/signup", config: Accounts.signup },
  { method: "POST", path: "/login", config: Accounts.login },
  { method: "GET", path: "/settings", config: Accounts.showSettings },
  { method: "POST", path: "/settings", config: Accounts.updateSettings },

  { method: "GET", path: "/home", config: Geoheritage.home },
  { method: "GET", path: "/report", config: Geoheritage.report },
  { method: "POST", path: "/addSite", config: Geoheritage.addSite },
  { method: "GET", path: "/delete-site/{_id}", config: Geoheritage.deleteSite },
  { method: "GET", path: "/update-site/{_id}", config: Geoheritage.showUpdatedSite },
  { method: "POST", path: "/update-site/{_id}", config: Geoheritage.updateSite },
  { method: "GET", path: "/themes", config: Geoheritage.themes },

  { method: 'GET', path: '/gallery/{_id}', config: Gallery.index },
  { method: 'POST', path: '/uploadfile/{_id}', config: Gallery.uploadFile },
  { method: 'GET', path: '/deleteimage/{public_id}', config: Gallery.deleteImage },
  { method: 'GET', path: '/upload', config: Gallery.upload },

  {
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: './public'
      }
    },
    options: { auth: false }
  }

];
