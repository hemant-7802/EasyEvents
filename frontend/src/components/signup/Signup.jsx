import { Input, Spinner } from "@nextui-org/react";
// import { signupAttribute } from "../../_Details";
import { GoogleLogin } from "@react-oauth/google";
import React, { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import useSignup from "../../hooks/useSignup";
import { Link } from "react-router-dom"

export default function Signup() {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [inputs, setInputs] = useState({
    fullName: '',
    email: '',
    mobileNo: '',
    password: '',
    confirmPassword: '',
  })
  console.log(inputs)

  const { loading, signup } = useSignup()

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(inputs)
  }

  return (
    <div className="flex h-screen flex-1 p-4">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 shadow-lg rounded-t-lg">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-14 -ml-10 signupImg"
              src="https://i.postimg.cc/R0CdR6yB/1.png"
              alt="Your Company"
            />
            <h2 className="mt-2 text-3xl font-[600] leading-9 tracking-tight">
              <span className="text-purple-500">Register</span> With Us
            </h2>
          </div>

          <div className="mt-8">
            <div>
              <form method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col gap-4">
                  <Input variant="underlined" id="name" name="name" type="text" autoComplete="name" placeholder="Enter Your Full Name" onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} value={inputs.fullName} autoFocus />
                  <Input variant="underlined" id="email" name="email" type="email" autoComplete="email" placeholder="Enter Your Email Address" onChange={(e) => setInputs({ ...inputs, email: e.target.value })} value={inputs.email} />
                  <Input variant="underlined" id="mobileNo" name="mobileNo" type="number" autoComplete="mobileNo" placeholder="Enter Your Contact Number" onChange={(e) => setInputs({ ...inputs, mobileNo: e.target.value })} value={inputs.mobileNo} />
                  <Input variant="underlined" id="password" name="password" type="password" autoComplete="password" placeholder="Enter Your Password" onChange={(e) => setInputs({ ...inputs, password: e.target.value })} value={inputs.password} />
                  <Input variant="underlined" id="confirmPassword" name="confirmPassword" type="password" autoComplete="confirmPassword" placeholder="Confirm Password" onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })} value={inputs.confirmPassword} />
                </div>
                <div className='text-right text-sm'>
                  <p>Already have an account? <span className='text-purple-500 font-medium underline underline-offset-2 hover:text-purple-600 transition-all duration-150'><Link to="/login">Login</Link></span></p>
                </div>
                <div className="mt-2">
                  <button
                    type="submit"
                    className={`signup-btn w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
                    disabled={loading}
                  >
                    {loading ? <Spinner color="primary" /> : "Register"}
                  </button>
                </div>

                <div className="mt-7">
                  <div className="relative">
                    <div
                      className="absolute inset-0 flex items-center"
                      aria-hidden="true"
                    >
                      <div className="w-full border-t border-gray-200" />
                    </div>
                    <div className="relative flex justify-center text-sm font-medium leading-6">
                      <span className="bg-white rounded-xl px-6 text-gray-900">
                        Or continue with
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-1 sm:grid sm:grid-cols-2 gap-4">
                    <span className="text-sm font-semibold leading-6">
                      <div>
                        {profile ?
                          (
                            <button
                              onClick={login}
                              className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
                            >
                              <img
                                class="w-6 h-6"
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                loading="lazy"
                                alt="google logo"
                              />
                              <span>Login with Google</span>
                            </button>
                          ) : null}
                      </div>
                    </span>

                    <a
                      href="#"
                      className="flex w-[11.5rem] h-[2.78rem] items-center justify-center gap-3 rounded-md bg-[#24292F] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-semibold leading-6">
                        login with GitHub
                      </span>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-full w-full object-cover rounded-r-lg shadow-lg"
          src="https://i.postimg.cc/Vk7ZBhH3/pexels-marina-utrabo-1729797.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
