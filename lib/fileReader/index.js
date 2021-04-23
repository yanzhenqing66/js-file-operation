'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file 读取流文件
 * @author yan zhenqing
 * @param {file} file 文件
 * @param {读取图片：传'image'，其他文件格式可以传'file'(或者不传)} type 读取文件格式
 */

var fileReader = function fileReader(file, type) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    if (type === 'image') {
      reader.readAsDataURL(file);
      reader.onload = function (e) {
        resolve(e.target.result);
      };
      reader.onerror = function (e) {
        reject(e);
      };
    } else {
      reader.readAsText(file);
      reader.onload = function (e) {
        resolve(e.target.result);
      };
      reader.onerror = function (e) {
        reject(e);
      };
    }
  });
};

exports.fileReader = fileReader;