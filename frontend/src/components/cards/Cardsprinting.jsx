import React from 'react'
import Maincard from '../Maincard'

export default function Cardsprinting({ categoryName, details }) {
    return (
        <Maincard cardname={details} title={categoryName}/>
    )
}