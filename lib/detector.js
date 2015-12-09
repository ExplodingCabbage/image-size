'use strict';

var typeMap = {
  'bmp': require('./types/bmp').detect,
  'gif': require('./types/gif').detect,
  'jpg': require('./types/jpg').detect,
  'png': require('./types/png').detect,
  'psd': require('./types/psd').detect,
  'svg': require('./types/svg').detect,
  'tiff': require('./types/tiff').detect,
  'webp': require('./types/webp').detect,
};

module.exports = function (buffer, filepath) {
  var type, result;
  for (type in typeMap) {
    result = typeMap[type](buffer, filepath);
    if (result) {
      return type;
    }
  }
};
