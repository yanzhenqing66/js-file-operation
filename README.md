# js-file-operation
文件操作，可以对文件上传，以及对客户端接收的文件流进行下载

## install
```
npm install file-operation --save
```

### 功能
文件上传
主要是对文件类型做判断，输出符合条件的文件，`uploadFile(file, type)` 函数，传两个参数，第一个参数是要上传的文件；第二个参数type是文件的后缀名，比如：`.png/.docx/.txt` 等文件都可以做出判断。函数执行完会返回一个 `Promise` ，可以对得到的文件进行下一步操作

文件流下载
主要对服务器返回的文件流进行下载（暂时不能下载二进制文件）。内部将文件转换成`Blob`对象，在通过 `URL`对象的 `createObjectURL`方法将`Blob`对象转换成 `url`地址。通过创建`a`标签，点击下载文件。`fileStreamDownload(fileStream, fileName)` 函数接收两个参数，文件流和文件名。