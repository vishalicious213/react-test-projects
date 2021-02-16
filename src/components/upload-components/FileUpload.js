import React from 'react'

const FileUpload = () => {
    return (
        <>
            <form className='upload-form'>
                <div className='file-upload'>
                    <input type='file' className='custom-file-input' id='customFile' />
                    <label className='custom-file-label' htmlFor='customFile'>Choose file</label>
                </div>

                <input type='submit' value='Upload' className='upload-button' />
            </form>
        </>
    )
}

export default FileUpload