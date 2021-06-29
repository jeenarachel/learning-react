import React from 'react'
import './Header.css'

const Header = (props) => {
    return (
        <div className='head-container'>
            <img className={`head-image 
                ${props.enlarged ? `head-image-big` : `head-image-small`}`}
                src='https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png' />
            <h1 className={`head-text
                ${props.enlarged ? `head-text-big` : `head-text-small`}`}> Name It!</h1>
            <p className={`body-text
                ${props.enlarged ? `body-text-big` : `body-text-small`}`}>Generate the perfect name for your
                <br />start-up or project idea.</p>
        </div>
    )
}

export default Header