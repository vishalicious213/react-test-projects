import React from 'react'
import ReactDom from 'react-dom'

export default function PortalModal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
        <div className='portalOverlay'></div>
        <div className='portalModal'>
            {children}
            <button className='closePortalModal' onClick={onClose}>Close Modal</button>
        </div>
        </>,
        document.getElementById('portal')
    )
}