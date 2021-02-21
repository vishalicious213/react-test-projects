import React, { useState } from 'react'
import PortalModal from './portal-components/PortalModal'
import Upload from './Upload'
import ControlledInputs from './ControlledInputs'

export default function Portal() {
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenB, setIsOpenB] = useState(false)

    return (
        <>
        <div className='portal'>
            <button onClick={() => setIsOpen(true)}>Open Upload Modal</button>

            <PortalModal open={isOpen} onClose={() => setIsOpen(false)}>
                <Upload />
            </PortalModal>
        </div>

        <div className='portal'>
            <button onClick={() => setIsOpenB(true)}>Open Inputs Modal</button>

            <PortalModal open={isOpenB} onClose={() => setIsOpenB(false)}>
                <ControlledInputs />
            </PortalModal>
        </div>

        <div className='other'>Other Content</div>
        </>
    )
}