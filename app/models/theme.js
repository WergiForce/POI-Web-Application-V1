'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const themeSchema = Schema({
  themeNo: String,
  themeTitle: String,
  themeDetails: String,
});

module.exports = Mongoose.model('Theme', themeSchema);