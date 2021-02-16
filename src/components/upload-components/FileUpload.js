import React from 'react'

const FileUpload = () => {
    return (
        <>
            <form className='upload-form'>
                <div className='file-upload'>
                    <label className='upload-input-label' htmlFor='uploadFile'>Choose file</label>
                    <input type='file' className='upload-input' id='uploadFile' />
                </div>

                <input type='submit' value='Upload' className='upload-button' />
            </form>
        </>
    )
}

export default FileUpload