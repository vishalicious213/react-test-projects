import React, { useState } from 'react'
import axios from 'axios'
import '../App.css'

const Cloudinary = () => {
    const [selectedImage, setSelectedImage] = useState('')

    const uploadImage = () => {
        console.log(selectedImage)

        const formData = new FormData()
        formData.append('file', selectedImage)
        formData.append('upload_preset', 'sendCloudinary')

        axios
            .post('https://api.cloudinary.com/v1_1/expressgroomer/image/upload', formData)
            .then(res => console.log(res.data.url, res.data.secure_url))
    }

    return (
        <div id='cloudinary'>
            <input 
                type='file' 
                onChange ={(event) => {
                    setSelectedImage(event.target.files[0])
                }}
            />
            <button onClick={uploadImage}>Upload Image</button>
        </div>
    )
}

export default Cloudinary