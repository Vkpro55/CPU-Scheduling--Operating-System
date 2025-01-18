import React from 'react'
import CPUoptions from './CPUoptions';
import ContentOptions from './ContentOptions';

const Header = () => {

    return (
        <>
            <div className="header-component">
                <CPUoptions />
                <ContentOptions />
            </div>
        </>
    )
}

export default Header