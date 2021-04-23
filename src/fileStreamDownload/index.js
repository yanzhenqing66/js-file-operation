/**
 * @file 下载流文件
 * @author yan zhenqing
 * @param {fileStream} fileStream 文件流
 * @param {fileName} filename 文件名
 */

const fileStreamDownload = (fileStream, fileName) => {
  return new Promise((resolve, reject) => {
    if (fileStream) {
      const a = document.createElement('a')
      a.download = fileName || 'download'
      a.style.display = 'none'
      a.href = URL.createObjectURL(new Blob(['\uFEFF' + fileStream]))  // 前面加'\uFEFF'解决乱码
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      resolve(a.href)
    } else {
      reject('file not found')
    }
  })
}

export { fileStreamDownload }