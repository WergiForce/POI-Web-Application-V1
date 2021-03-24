"use strict";

const Mongoose = require("mongoose");
const Schema = Mongoose.Schema;

const geoSiteSchema = new Schema({
  siteName: String,
  lat: Number,
  long: Number,
  description: String,
  geologist: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  theme: {
    type: Schema.Types.ObjectId,
    ref: "Theme",
  }
});

module.exports = Mongoose.model("Geosite", geoSiteSchema);
