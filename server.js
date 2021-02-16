const express = require('express')
const fileUpload = require('express-fileupload')


// initialize express & fileUpload
const app = express()
app.use(fileUpload())

app.listen(5000, () => console.log('File Upload server started'))