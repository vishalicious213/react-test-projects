import React from 'react'

export default function PortalModal({ open, children, onClose }) {
    if (!open) return null

    return (
        <div>
            <button onClick={onClose}>Close Modal</button>
            {children}
        </div>
    )
}