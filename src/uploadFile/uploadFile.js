/**
 * @file: 上传文件
 * @author: yan zhenqing
 * @param {file} e 上传的文件
 * @param {'.txt'/'.docx'/'.png'/...} type 文件后缀名，字符串（小写）数组类型
 */

const uploadFile = (e, typeList) => {
  return new Promise((resolve, reject) => {
    if (e) {
      const file = e.target.files[0]
      const { name } = file
      const filetype = name.substring(name.lastIndexOf('.')).toLowerCase()
      if (typeList.indexOf(filetype) === -1) {
        reject(`文件格式必须为${type}`)
      } else {
        resolve(file)
      }
    } else {
      reject('please select file')
    }
  })
}

module.exports = uploadFile