/**
 * @file: 上传文件
 * @author: yan zhenqing
 * @param {file} 上传的文件
 * @param ['txt', 'docx', 'png'...] typeList 文件后缀名，字符串（小写）数组类型
 */

const uploadFile = (file, typeList) => {
  return new Promise((resolve, reject) => {
    if (file) {
      const filetype = file.name.substring(file.name.lastIndexOf('.') + 1).toLowerCase()
      if (Array.isArray(typeList)) {
        typeList.map(type => type.toLowerCase()).includes(filetype)
          ? resolve(file)
          : reject(`文件格式必须为${typeList.join('/').toUpperCase()}格式`)
      } else {
        reject('typeList must be array type')
      }
    } else {
      reject('please select file')
    }
  })
}

export { uploadFile }