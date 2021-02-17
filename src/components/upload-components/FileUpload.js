import React, { useState } from 'react'
import axios from 'axios'

const FileUpload = () => {
    const [file, setFile] = useState('')

    const onChange = e => {
        setFile(e.target.files[0]);
    }

    const onSubmit = async e => {
        e.preventDefault()
        // console.log('state: ', file)
        const formData = new FormData()
        formData.append('file', file)

        try {
            const res = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log('File upload successful: ', res.data)

        } catch(err) {
            if(err.response.status === 500) {
                console.log('There was a problem with the server')
            } else {
                console.log(err.response.data.msg)
            }
        }
    }

    return (
        <>
            <form className='upload-form' onSubmit={onSubmit}>
                <div className='file-upload'>
                    <label className='choose-file-button' htmlFor='uploadFile'>Choose file</label>
                    <input type='file' className='upload-input' id='uploadFile' onChange={onChange} />
                </div>

                <input type='submit' value='Upload' className='upload-button' />
            </form>
        </>
    )
}

export default FileUpload