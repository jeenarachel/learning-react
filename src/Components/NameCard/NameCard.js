import React from 'react'
import './NameCard.css'

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=%27%3B'
const NameCard = ({ sugg }) => {
    return (
        <a className='card-link' href={`${nameCheapUrl}${sugg}`}>
            <div className='namecard-container'>
                <p className='namecard'>{sugg}</p>
            </div>
        </a>
    )
}

export default NameCard