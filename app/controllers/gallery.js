'use strict';

const ImageStore = require('../utils/image-store');

const Gallery = {
  index: {
    handler: async function(request, h) {
      try {
        const allImages = await ImageStore.getImagesByFolder(request.params._id);
        return h.view('gallery', {
          title: 'Gallery',
          images: allImages,
          id: request.params._id,
        });
      } catch (err) {
        console.log(err);
      }
    }
  },

  upload: {
    handler: async function(request, h) {
      try {
        return h.view('upload', {
          title: 'Upload Image',
        });
      } catch (err) {
        console.log(err);
      }
    }
  },

  uploadFile: {
    handler: async function(request, h) {
      try {
        const file = request.payload.imagefile;
        if (Object.keys(file).length > 0) {
          await ImageStore.uploadImage(request.payload.imagefile, request.params._id);
          return h.redirect('/gallery/'+request.params._id);
        }
        return h.view('gallery/'+request.params._id, {
          title: 'Gallery',
          error: 'No file selected'
        });
      } catch (err) {
        console.log(err);
      }
    },
    payload: {
      multipart: true,
      output: 'data',
      maxBytes: 209715200,
      parse: true
    }
  },

  deleteImage: {
    handler: async function(request, h) {
      try {
        await ImageStore.deleteImage(request.params.public_id);
        return h.redirect('/gallery/'+request.params._id);
      } catch (err) {
        console.log(err);
      }
    }
  }
};

module.exports = Gallery;
