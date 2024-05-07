import React from 'react'
import { FaStar } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Maincard({ title, cardname }) {
    return (
        <div className="py-8 px-4 sm:py-12 xl:mx-auto xl:max-w-7xl xl:px-6">
            <div className="sm:flex sm:items-center sm:justify-between">
                <h2 className="text-2xl font-bold tracking-tight capitalize"><Link to="/" onClick={(e) => { e.render() }} className='p-1'><IoMdArrowRoundBack className='inline-block' /></Link> {title}</h2>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 lg:max-w-7xl">
                {cardname.map((cards) => {
                    return (
                        <div className="group relative">
                            <div className="aspect-h-1 aspect-w-1 h-80 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none lg:h-80">
                                <img className='h-full w-full object-cover' src={cards.image} alt="" />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div className='max-w-[75%]'>
                                    <h2 className='font-bold text-lg capitalize'>{cards.name}</h2>
                                    <div className='inline-flex justify-evenly text-sm capitalize'>
                                        <MdLocationPin className='text-xl text-red-700' />
                                        <address>{cards.address}</address>
                                    </div>
                                    <dd className='py-2 px-1 text-green-600 cursor-pointer rounded-lg'>
                                        <a className="text-md" href={`tel:+91 ${cards.phone}`}>
                                            <TbPhoneCall className='inline text-lg' /> {`+91 ${(cards.phone).trim()}`}
                                        </a>
                                    </dd>
                                </div>
                                <div className=''>
                                    <p className="text-sm font-medium rounded-md text-white bg-green-800 px-4 pt-1 select-none"><FaStar className='inline text-white pb-1 h-7' /> {cards.ratings}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}