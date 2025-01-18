import React from 'react'

const NavbarItem = ({ className, href, item }) => {

    const handler = (event) => {
        event.preventDefault();

        const targteID = href.replace('#', '');
        const element = document.getElementById(targteID);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <>
            <a className={className} href={href} onClick={handler}> {item}</a>
        </>
    )
}

export default NavbarItem