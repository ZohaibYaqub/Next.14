import React from 'react'
import Link from 'next/link'
import footer from '../components/footer'
import Image from 'next/image'
const login = () => {
  return (
    <>
      <section className="text-gray-600 body-font font-Poppins">
        <div className="container  py-8  mx-auto flex justify-center items-center ">
          <div className="flex justify-center lg:w-3/5 md:w-1/2  md:pr-16 lg:pr-0 pr-0 ">
            <Image
              className='shadow-lg rounded-md hidden md:block'
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="signup"
              width={550}
              height={380}
            />
          </div>
          <div className="  shadow-2xl lg:w-2/6 md:w-1/2  rounded-lg p-8 flex  flex-col md w-full mt-10 md:mt-0 dark:bg-slate-800">
            <h2 className="text-gray-900 text-center text-lg font-medium title-font mb-5 dark:text-white">LogIn</h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600 dark:text-slate-300">Email Address</label>
              <input type="text" id="email" name="email" className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-slate-300">Password</label>
              <input type="text" id="email" name="email" className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-black rounded text-lg my-2 ">Login</button>
            <Link className=" no-underline " href="/signup"> <p className="  no-underline text-sm font-extralight cursor-pointer  text-gray-600 mt-3 text-center my-3 dark:text-slate-300">Free Up To Sign Up</p></Link>
          </div>
        </div>
      </section>
      {footer()}
    </>
  )
}

export default login