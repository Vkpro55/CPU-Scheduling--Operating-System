import React from 'react'
import NavbarItem from './NavbarItem'


const Navbar = () => {
    return (
        <>
            <div className="section-navbar container">

                <div className="navbar-logo">
                    <figure>
                        <img src="/home_assets/logo.png" alt="" />
                    </figure>
                </div>
                <div className="navbar-items">
                    <ul>
                        <li><NavbarItem className="item-1" href="#section-blog" item="Resources" /></li>
                        <li><NavbarItem className="item-2" href="#section-cpu-sched" item="CPU Scheduling" /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar