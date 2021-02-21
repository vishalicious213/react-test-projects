import React, { useState } from 'react'
import PortalModal from './portal-components/PortalModal'
import Upload from './Upload'

export default function Portal() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <div className='portal'>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <PortalModal open={isOpen} onClose={() => setIsOpen(false)}>
                <Upload />
            </PortalModal>
        </div>

        <div className='other'>Other Content</div>
        </>
    )
}