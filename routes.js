"use strict";

const Accounts = require("./app/controllers/accounts");
const Geoheritage = require("./app/controllers/geoheritage");

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

  { method: 'GET', path: '/', config: Gallery.index },
  { method: 'POST', path: '/uploadfile', config: Gallery.uploadFile },
  { method: 'GET', path: '/deleteimage/{id}', config: Gallery.deleteImage },
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
