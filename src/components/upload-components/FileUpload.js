import React, { useState } from 'react'
import axios from 'axios'

const FileUpload = () => {
    const [file, setFile] = useState('')
    const [filename, setFilename] = useState('Choose file')

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
    }

    const onSubmit = async e => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } catch(err) {

        }
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