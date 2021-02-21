import React from 'react'
import ReactDom from 'react-dom'

export default function PortalModal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
        <div className='portalOverlay'></div>
        <div className='portalModal'>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </div>
        </>,
        document.getElementById('portal')
    )
}