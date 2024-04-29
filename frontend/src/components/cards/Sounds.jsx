import React from 'react'
import Maincard from '../Maincard'

export default function Sounds({ categoryName, details }) {
    return (
        <Maincard cardname={details} title={categoryName}/>
    )
}