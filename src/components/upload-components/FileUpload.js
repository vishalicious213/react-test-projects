import React, { useState } from 'react'

const FileUpload = () => {
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose file')

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
    }

    return (
        <>
            <form className='upload-form'>
                <div className='file-upload'>
                    <label className='upload-input-label' htmlFor='uploadFile'>Choose file</label>
                    <input type='file' className='upload-input' id='uploadFile' onChange={onChange} />
                </div>

                <input type='submit' value='Upload' className='upload-button' />
            </form>
        </>
    )
}

export default FileUpload