// import library
import React, { useState } from "react";

// import components
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Spinner } from "@nextui-org/react";
import { MailIcon } from './MailIcon.jsx';
import { LockIcon } from './LockIcon.jsx';
import useLogin from "../../../hooks/useLogin.js";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext.jsx";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { loading, login } = useLogin()
  const { authUser } = useAuthContext()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password)
  }

  return (
    <div className="flex justify-center h-screen items-center ">
      <div className='w-[500px] py-10 px-4 rounded-lg shadow-xl shadow-gray-900 flex flex-col items-center justify-center min-w-[290px] gap-2'>
        <h1 className='text-3xl mb-8 font-semibold text-center text-gray-300'>Login <span className='text-purple-500'>EasyEvent</span></h1>
        <form method="POST" onSubmit={handleSubmit} className='w-[90%] flex flex-col gap-4'>
          <Input
            endContent={
              <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            placeholder="Enter your email"
            variant="underlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            endContent={
              <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
            }
            placeholder="Enter your password"
            type="password"
            variant="underlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='text-right text-sm'>
            <p>Don't have an account? <span className='text-purple-500 font-medium underline underline-offset-2 hover:text-purple-600 transition-all duration-150'><Link to="/signup">Sign Up</Link></span></p>
          </div>
          <div className='w-full'>
            <Button type="submit" className={`login-btn bg-sky-500 rounded-lg w-full py-1 hover:bg-sky-600 text-gray-300`} disabled={loading}>
              {loading ? <Spinner color="default" /> : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
