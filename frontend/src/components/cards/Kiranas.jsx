import React from 'react'
import Maincard from '../Maincard'

export default function Kiranas({ categoryName, details }) {
    return (
        <Maincard cardname={details} title={categoryName}/>
    )
}