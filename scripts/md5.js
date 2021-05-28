/* global hexo */

'use strict';

const crypto = require('crypto');

hexo.extend.helper.register('md5', function(path) {
  let str = this.url_for(path);
  str.replace('index.html', '');
  return crypto.createHash('md5').update(str).digest('hex');
});