import React, { useState } from 'react'
import PortalModal from './portal-components/PortalModal'

export default function Portal() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <div className='portal'>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>

            <PortalModal open={isOpen}>
                MODAL
            </PortalModal>
        </div>

        <div className='other'>Other Content</div>
        </>
    )
}