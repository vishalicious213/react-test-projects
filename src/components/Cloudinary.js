import React from 'react'
import axios from 'axios'
import '../App.css'

const Cloudinary = () => {
    const uploadImage = (files) => {
        console.log(files[0])

        const formData = new FormData()
        formData.append('file', files[0])
        formData.append('upload_preset', 'sendCloudinary')

        axios
            .post('https://api.cloudinary.com/v1_1/expressgroomer/image/upload', formData)
            .then(res => console.log(res))
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