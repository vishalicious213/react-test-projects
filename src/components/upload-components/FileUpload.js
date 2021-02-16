import React from 'react'

const FileUpload = () => {
    return (
        <>
            <form>
                <div className='custom-file'>
                    <input type='file' className='custom-file-input' id='customFile' />
                    <label className='custom-file-label' htmlFor='customFile'>Choose file</label>
                </div>

                <input type='submit' value='Upload' className='btn' />
            </form>
        </>
    )
}

export default FileUpload