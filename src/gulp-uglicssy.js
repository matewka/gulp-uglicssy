'use strict';

const through = require('through2');
const uglicssy = require('uglicssy');

function gulpUglicssy() {
  const bundle = uglicssy.bundle();

  return through.obj(function(file, encoding, callback) {
    const dotIndex = file.relative.lastIndexOf('.');
    const fileType = dotIndex === -1 ? null : file.relative.substr(dotIndex + 1);

    file._contents = new Buffer(bundle.convert(file._contents.toString(), fileType));
    callback(null, file);
  });
}

gulpUglicssy.bundle = () => {
  const bundle = uglicssy.bundle();

  return () => {
    return through.obj(function(file, encoding, callback) {
      const dotIndex = file.relative.lastIndexOf('.');
      const fileType = dotIndex === -1 ? null : file.relative.substr(dotIndex + 1);

      file._contents = new Buffer(bundle.convert(file._contents.toString(), fileType));
      callback(null, file);
    });
  }
};

module.exports = gulpUglicssy;