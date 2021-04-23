/**
 * @file: 上传文件
 * @author: yan zhenqing
 * @param {file} e 上传的文件
 * @param ['txt', 'docx', 'png'...] typeList 文件后缀名，字符串（小写）数组类型
 */

const uploadFile = (e, typeList) => {
  return new Promise((resolve, reject) => {
    if (e) {
      const file = e.target.files[0]
      const filetype = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase()
      if (Array.isArray(typeList)) {
        typeList.map(type => type.toLowerCase()).includes(filetype)
          ? resolve(file)
          : reject(`文件格式必须为${typeList.join('/')}`)
      } else {
        reject('typeList must be array type')
      }
    } else {
      reject('please select file')
    }
  })
}

export { uploadFile }