import React from 'react'

const Blog = ({ src, alt, os, icon, iconAlt, heading, content, href }) => {
    return (
        <>
            <div className="single-blog">
                <figure className='main-image'>
                    <img src={src} alt={alt} />
                </figure>

                <div className="blog-content">
                    <span>{os}</span>
                    <div className='blog-content-heading'>
                        <h3>{heading}</h3>
                        <a href={href} target="_blank" rel="noopener noreferrer">
                            <img src={icon} alt={iconAlt} />
                        </a>
                    </div>

                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}

export default Blog