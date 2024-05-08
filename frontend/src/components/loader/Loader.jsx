import { Spinner } from '@nextui-org/react'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Spinner size='lg'/>
    </div>
  )
}

export default Loader
