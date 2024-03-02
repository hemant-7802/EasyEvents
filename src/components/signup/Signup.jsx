import { Input } from "@nextui-org/react";
import { signupAttribute } from "../../_Details";

export default function Signup() {
  return (
    <div className="flex min-h-full flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              className="h-14 -ml-10 signupImg"
              src="https://i.postimg.cc/R0CdR6yB/1.png"
              alt="Your Company"
            />
            <h2 className="mt-2 text-3xl font-[600] leading-9 tracking-tight">
              Register With Us
            </h2>
          </div>

          <div className="mt-8">
            <div>
              <form action="#" method="POST" className="space-y-6">
                <div className="flex flex-col gap-4">
                    {signupAttribute.map((item, index) => {
                      return(
                        <div className={index === 2 ? "grid grid-cols-2 gap-2" : "grid grid-cols-1"}>
                      <Input
                        id={item.id}
                        name={item.name}
                        type={item.type}
                        autoComplete={item.autoComplete}
                        required
                        placeholder={item.placeholder}
                        className="w-full sm:text-sm sm:leading-6
                        placeholder:text-black"
                        variant="underlined"
                        size="sm"
                      />
                      </div>
                      )
                    })}
                  </div>

                  <div className="mt-2">
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-purple-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-purple-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Register
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
                      <a
                        href="#"
                        className="flex w-[11.5rem] h-[2.7rem] items-center justify-center rounded-md bg-[#fff] px-12 py-1.5 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0] border-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="-150 0 950 512"
                          id="google"
                        >
                          <path
                            fill="#fbbb00"
                            d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
                          ></path>
                          <path
                            fill="#518ef8"
                            d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
                          ></path>
                          <path
                            fill="#28b446"
                            d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
                          ></path>
                          <path
                            fill="#f14336"
                            d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
                          ></path>
                        </svg>
                        <span className="text-sm font-semibold leading-6">
                          Google
                        </span>
                      </a>

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
                          GitHub
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
          className="absolute inset-0 h-full w-full object-cover"
          src="https://i.postimg.cc/Vk7ZBhH3/pexels-marina-utrabo-1729797.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
