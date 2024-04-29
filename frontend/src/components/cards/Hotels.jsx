import React from 'react'
import Maincard from '../Maincard'
import Nav from '../navbar/Nav'

export default function Hotels({ categoryName, details }) {
    return (
        <>
            <Maincard cardname={details} title={categoryName} />
        </>
    )
}