import React from 'react'
import '../App.css'

const Cloudinary = () => {
    const uploadImage = (files) => {
        console.log(files[0])
    }

    return (
        <div id='cloudinary'>
            <input 
                type='file' 
                onChange ={(event) => {
                    uploadImage(event.target.files)
                }}
            />
        </div>
    )
}

export default Cloudinary