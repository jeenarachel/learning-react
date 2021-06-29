import React from 'react'
import './ResultsContainer.css'
import NameCard from './../NameCard/NameCard.js'

const ResultsContainer = ({ suggested }) => {
    const suggestedNames = suggested.map((word) => {
        return <NameCard sugg={word} key={word}>{word}</NameCard>
    })
    return (
        <div className='results-container'>{suggestedNames}
        </div>
    )
}

export default ResultsContainer