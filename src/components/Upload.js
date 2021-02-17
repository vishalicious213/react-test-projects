import React from 'react'
import FileUpload from './upload-components/FileUpload'
import '../App.css'

// const Upload = () => <div className='Upload'>Upload</div>

const Upload = () => {
    return (
        <div id='Upload'>
            <h4>Upload File or Photo</h4>

            <FileUpload />

            <p>This upload form uses React Hooks for the front-end and Express for the back-end. The Express server runs locally on port 5000 and the React application runs on port 3000. Uploaded files are saved to the /public/uploads folder.</p>
            <p>Files are uploaded using axios. Local CORS middleware allows Express to accept the upload. The "Choose file" button is a label that sits on top of the actual button, for styling purposes.</p>
            <p><a href='https://github.com/vishalicious213/react-test-projects/blob/main/src/components/upload-components/FileUpload.js'>View front-end source code</a></p>
            <p className='closer'><a href='https://github.com/vishalicious213/react-test-projects/blob/main/server.js'>View back-end source code</a></p>
        </div>
    )
}

export default Upload