import React from 'react'
import "./Search.css"

const Search = (props) => {
    return (
        <div className='search-container'>
            <input onChange={(event) => props.onChange(event.target.value)}
                className='search-box'
                placeholder='Enter your keywords here' />
        </div>
    )
}

export default Search