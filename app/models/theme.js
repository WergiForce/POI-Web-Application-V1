'use strict';

const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const themeSchema = Schema({
  themeNumber: Number,
  themeTitle: String,
});

module.exports = Mongoose.model('Theme', themeSchema);