const express = require('express')
const fileUpload = require('express-fileupload')


// initialize express & fileUpload
const app = express()
app.use(fileUpload())

// Upload endpoint
app.post('/upload', (req, res) => {
    if(req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' })
    }
})

app.listen(5000, () => console.log('File Upload server started'))