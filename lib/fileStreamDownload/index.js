'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @file 下载流文件
 * @author yan zhenqing
 * @param {fileStream} fileStream 文件流
 * @param {fileName} filename 文件名
 */

var fileStreamDownload = function fileStreamDownload(fileStream, fileName) {
  if (fileStream) {
    try {
      var a = document.createElement('a');
      a.download = fileName || 'download';
      a.style.display = 'none';
      a.href = URL.createObjectURL(new Blob(['\uFEFF' + fileStream])); // '\uFEFF' 前面加解决乱码
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      throw new Error(error);
    }
  } else {
    throw new Error('file not found');
  }
};

exports.fileStreamDownload = fileStreamDownload;