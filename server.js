const express = require('express')
const fileUpload = require('express-fileupload')


// initialize express & fileUpload
const app = express()
app.use(fileUpload())

// CORS
let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  };

// Upload endpoint
app.post('/upload', allowCrossDomain, (req, res) => {
    if(req.files === null) {
        return res.status(400).json({ msg: 'No file uploaded' })
    }

    const file = req.files.file // define the file in React

    file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err)
            return res.status(500).send(err)
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}`})
    })
})

app.listen(5000, () => console.log('File Upload server started...'))