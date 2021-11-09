import React from 'react';
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <p>&copy; {new Date().getFullYear()} Lavish All rights reserved.</p>
            <p>Privacy · Terms · Sitemap · Company Details</p>
        </div>
    )
}

export default Footer