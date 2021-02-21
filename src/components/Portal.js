import React from 'react'
import PortalModal from './portal-components/PortalModal'

export default function Portal() {
    return (
        <>
        <div className='portal'>
            <button>Open Modal</button>

            <PortalModal>
                MODAL
            </PortalModal>
        </div>

        <div className='other'>Other Content</div>
        </>
    )
}