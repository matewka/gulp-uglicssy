const fs = require('fs');
const through = require('through2');
const uglicssy = require('uglicssy');

module.exports = () => {
  const bundle = uglicssy.bundle();

  return through.obj(function(file, encoding, callback) {
    const dotIndex = file.relative.lastIndexOf('.');
    const fileType = dotIndex === -1 ? null : file.relative.substr(dotIndex + 1);

    file._contents = new Buffer(bundle.convert(file._contents.toString(), fileType));
    callback(null, file);
  });
};