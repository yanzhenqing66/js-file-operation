/**
 * 上传文件
 * author: yan zhenqing
 * @param {file} e 上传的文件
 * @param {'.txt'/'.docx'/'.png'/...} type 文件后缀名，字符串（小写）
 */

const uploadFile = (e, type) => {
  return new Promise((resolve, reject) => {
    if (e) {
      const file = e.target.files[0]
      const { name } = file
      const filetype = name.substring(name.lastIndexOf('.')).toLowerCase()
      if (filetype !== type) {
        reject(`文件格式必须为${type}错误`)
      } else {
        resolve(file)
      }
    } else {
      reject('please select file')
    }
  })
}

export { uploadFile }