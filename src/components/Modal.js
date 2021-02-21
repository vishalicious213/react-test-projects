import React, { useEffect, useState, useRef } from 'react'
import '../App.css'

function Modal() {
    const outside = useRef()
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = e => {
        if (outside.current.contains(e.target)) {
            return
        }
        setIsOpen(false)
    }

    useEffect(() => {
        const getClick = document.addEventListener('click', handleClick)

        return () => {
            getClick()
        }
    }, [])

    return (
        <div className='page-body' ref={outside}>
            <button onClick={() => setIsOpen(!isOpen)}>Toggle Modal</button>
            {isOpen ? (
                <div className='modal'>
                    <p>Modal is open</p>
                </div>
            ) : null}
        </div>
    )
}

export default Modal

// https://www.youtube.com/watch?v=xSp98W9EYP8