'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file: 上传文件
 * @author: yan zhenqing
 * @param {file} 上传的文件
 * @param ['txt', 'docx', 'png'...] typeList 文件后缀名，字符串（小写）数组类型
 */

var uploadFile = function uploadFile(file, typeList) {
  return new Promise(function (resolve, reject) {
    if (file) {
      var filetype = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase();
      if (Array.isArray(typeList)) {
        typeList.map(function (type) {
          return type.toLowerCase();
        }).includes(filetype) ? resolve(file) : reject('\u6587\u4EF6\u683C\u5F0F\u5FC5\u987B\u4E3A' + typeList.join('/').toUpperCase() + '\u683C\u5F0F');
      } else {
        reject('typeList must be array type');
      }
    } else {
      reject('please select file');
    }
  });
};

exports.uploadFile = uploadFile;