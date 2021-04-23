'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file: 上传文件
 * @author: yan zhenqing
 * @param {file} e 上传的文件
 * @param {'.txt'/'.docx'/'.png'/...} type 文件后缀名，字符串（小写）数组类型
 */

var uploadFile = function uploadFile(e, typeList) {
  return new Promise(function (resolve, reject) {
    if (e) {
      var file = e.target.files[0];
      var name = file.name;

      var filetype = name.substring(name.lastIndexOf('.')).toLowerCase();
      if (Array.isArray(typeList)) {
        typeList.includes(filetype) ? resolve(file) : reject('\u6587\u4EF6\u683C\u5F0F\u5FC5\u987B\u4E3A' + typeList);
      } else {
        reject('typeList must be array type');
      }
    } else {
      reject('please select file');
    }
  });
};

exports.uploadFile = uploadFile;