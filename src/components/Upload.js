import React from 'react'
import FileUpload from './upload-components/FileUpload'
import '../App.css'

// const Upload = () => <div className='Upload'>Upload</div>

const Upload = () => {
    return (
        <div className='Upload'>
            <h4>Upload</h4>

            <FileUpload />
        </div>
    )
}

export default Upload