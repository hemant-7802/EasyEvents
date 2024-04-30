// import library
import React from 'react'

// import component
import { Input, input } from "@nextui-org/react";
import { MailIcon } from './MailIcon';
import { Button } from "@nextui-org/react";

// import icons
import { FaRegUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

// const inputdetails = [
//   {
//     type : 'text',
//     label : 'Name',
//     placeholder : 'Enter your name',
//     startContent : ''
//   },
// ]

function Map_contact() {

  const [value, setValue] = React.useState("");
  const [namevalue, setnamevalue] = React.useState("");
  const [phonevalue, setphonevalue] = React.useState("");

  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (value === "") return false;

    return validateEmail(value) ? false : true;
  }, [value]);

  return (
    <div id='contactus' className='flex flex-wrap justify-evenly align-middle iPadPro12.9:flex-nowrap mb-6 gap-8 py-6'>
      <div className='flex flex-wrap flex-col gap-8 p-4'>
        <h1 className='maptitle text-center text-4xl font-medium iPhone4and4S:text-2xl iPhone6and6Sand7and8:text-3xl'>Connecting Through Coordinates</h1>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.8454596064116!2d77.01149457546765!3d26.492920276899905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397186033b68597d%3A0x9dea9d9a65719a1a!2sK-Tech%20Education(karauli%20technical%20education%20%26%20computer%20hub!5e0!3m2!1sen!2sin!4v1708328824422!5m2!1sen!2sin" width="700" height="500" style={{ border: 0 }} loading="lazy" className=' min-w-[300px] iPhone4and4S:w-[300px] iPhone4and4S:h-[350px] iPhone6and6Sand7and8:w-[350px] iPhone6+and7+and8+:w-[390px]'></iframe>
      </div>
      <div className="flex flex-col gap-8 h-auto w-[450px] min-w-[300px] p-4">
        <h1 className='capitalize text-center text-4xl font-semibold mb-4 text-purple-600'>contact us</h1>
        <form action="" className='flex flex-col gap-6'>
          <Input
            value={namevalue}
            type='text'
            label='Name'
            placeholder='Enter your name'
            labelPlacement='outside'
            isClearable
            onValueChange={setnamevalue}
            startContent={
              <FaRegUser className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            }
            className='border-none'
          />
          <Input
            value={value}
            isClearable
            type="email"
            label="Email"
            placeholder="Enter your Email"
            labelPlacement="outside"
            isInvalid={isInvalid}
            color={isInvalid ? "danger" : "none"}
            errorMessage={isInvalid && "Please enter a valid email"}
            onValueChange={setValue}
            startContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
          />
          <Input
            value={phonevalue}
            type='text'
            label='Mobile No.'
            placeholder='Enter your Mobile Number'
            labelPlacement='outside'
            isClearable
            onValueChange={setphonevalue}
            startContent={
              <FaPhoneAlt className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
            } />
        </form>
        <Button color="secondary" className='query-btn w-[150px]'>Send Query</Button>
      </div>
    </div>
  )
}

export default Map_contact
