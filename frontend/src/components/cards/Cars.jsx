import React from 'react'
import Maincard from '../Maincard'

export default function Cars({ categoryName, details }) {
    return (
        <Maincard cardname={details} title={categoryName}/>
    )
}