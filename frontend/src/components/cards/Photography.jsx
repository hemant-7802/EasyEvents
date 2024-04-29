import React from 'react'
import Maincard from '../Maincard'

export default function Photography({ categoryName, details }) {
    return (
        <Maincard cardname={details} title={categoryName}/>
    )
}