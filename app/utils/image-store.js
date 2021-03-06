'use strict';

const cloudinary = require('cloudinary');
const fs = require('fs');
const util = require('util');
const writeFile = util.promisify(fs.writeFile);

const ImageStore = {
  configure: function() {
    const credentials = {
      cloud_name: process.env.name,
      api_key: process.env.key,
      api_secret: process.env.secret
    };
    cloudinary.config(credentials);
  },

  getAllImages: async function() {
    const result = await cloudinary.v2.api.resources();
    return result.resources;
  },

  getImagesByFolder: async function(folder) {
    let myFolder = folder.toString() +"/";
    const result = await cloudinary.v2.api.resources({
      type: 'upload',
      prefix: myFolder},
    );
    return result.resources;
  },

  uploadImage: async function(imagefile,folder) {
    await writeFile('./public/temp.img', imagefile);
    await cloudinary.v2.uploader.upload('./public/temp.img', { folder: folder });
  },

  deleteImage: async function(id) {
    await cloudinary.v2.uploader.destroy(id, (error, result) => {
      console.log(result)
    });
  },

};

module.exports = ImageStore;