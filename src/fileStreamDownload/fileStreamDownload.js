/**
 * @file: 下载文档流
 * @author: yan zhenqing
 * @param {fileStream} fileStream 文件流
 * @param {fileName} filename 文件名
 */

const fileStreamDownload = (fileStream, fileName) => {
  if (fileStream) {
    try {
      const a = document.createElement('a')
      a.style.display = 'none'
      a.download = fileName || '下载'
      a.href = URL.createObjectURL(new Blob(['\uFEFF' + fileStream]))  // '\uFEFF' 解决乱码
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    } catch (error) {
      throw new Error(error)
    }
  } else {
    throw new Error('file not found')
  }
}

module.exports = fileStreamDownload