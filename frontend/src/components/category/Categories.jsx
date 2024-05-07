import React from 'react'
import { categories } from '../../_Details'
import { Link } from 'react-router-dom'

function Categories() {
  return (
    <div className="py-10 sm:py-16 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
        <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
      </div>

      <div className="mt-3 flow-root">
        <div className="">
          <div className="relative box-content h-80 sm:h-auto overflow-x-scroll py-2 xl:overflow-visible">
            <div className="min-w-screen-xl absolute flex space-x-2 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 gap-8 xl:space-x-0 xl:px-0">
              {categories.map((category) => (
                <Link
                  onClick={(e) => { e.render() }}
                  key={category.name}
                  to={category.to}
                  className="relative flex h-60 w-60 flex-col overflow-hidden rounded-lg p-4 hover:brightness-75 cursor-pointer xl:w-auto">
                  <span aria-hidden="true" className="absolute inset-0 brightness-[70%]">
                    <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center hover:scale-110 transition-all duration-300" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 opacity-100" />
                  <span className="relative mt-auto text-center text-lg font-bold text-white ">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
