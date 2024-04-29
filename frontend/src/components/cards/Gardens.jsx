import React from 'react'
import Maincard from '../Maincard'

export default function Gardens({ categoryName, details }) {
    return (
        <Maincard cardname={details} title={categoryName}/>
    )
}