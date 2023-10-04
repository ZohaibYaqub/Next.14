import React from 'react'
import footer from '@/app/components/footer'
import Link from 'next/link'

const notes = () => {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden font-Poppins ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <h1 className='text-4xl text-center dark:text-slate-300'>Tricks & Tips </h1>
            <div className="py-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5 ">
              <div className=" sm:text-center md:w-64 md:mb-0 mb-6 flex-shrink-0  flex-col flex text-center justify-center items-center">
                <span className="font-semibold title-font text-gray-700 ">PC USERS</span>
                <span className="mt-1 text-gray-500 text-sm">28/9/2023</span>
              </div>
              <div className="md:flex-grow">
                <h2 className=" text-gray-900 title-font mb-2 text-3xl font-bold">HOW TO INSTALL IDM LIFETIME  </h2>
                <p className="leading-relaxed my-3">I can guide you on how to install Internet Download Manager (IDM) for a lifetime.</p>
                <Link className="no-underline" href=""><button className="button">Read More</button></Link>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-center justify-center">
              <span className="font-semibold title-font text-gray-700">PC USERS</span>
                <span className="mt-1 text-gray-500 text-sm">28/9/2023</span>
              </div>
              <div className="md:flex-grow">
                <h2 className=" text-gray-900 title-font mb-2 text-3xl font-bold">HOW TO REMOVE ADS  WEB / MBLE FOR LIFETIME </h2>
                <p className="leading-relaxed my-3">I can provide you with steps on how to remove ads from various platforms or devices, but I'll need more specific information about what you're trying to achieve.</p>
                <Link className="no-underline" href=""><button className="button">Read More</button></Link>
              </div>
            </div>
            <div className="py-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-center justify-center">
              <span className="font-semibold title-font text-gray-700">PC USERS</span>
                <span className="mt-1 text-gray-500 text-sm">28/9/2023</span>
              </div>
              <div className="md:flex-grow">
                <h2 className=" text-gray-900 title-font mb-2  text-3xl font-bold">HOW TO FREE NETFLIX WITHOUT SUBSCRIPTION ON MOBILE</h2>
                <p className="leading-relaxed my-3">I can Guide you how to free netflix app without subscription package.</p>
                <Link className="no-underline" href=""><button className="button">Read More</button></Link>
              </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-center justify-center">
              <span className="font-semibold title-font text-gray-700">PC USERS</span>
                <span className="mt-1 text-gray-500 text-sm">28/9/2023</span>
              </div>
              <div className="md:flex-grow">
                <h2 className=" text-gray-900 title-font mb-2  text-3xl font-bold">HOW TO PLAY STORE INSTALL IN PC & MACBOOK</h2>
                <p className="leading-relaxed my-3">I can Easily Explained how to play store install in windows.</p>
                <Link className="no-underline" href=""><button className="button">Read More</button></Link>
              </div>
            </div>

            <div className="py-8 flex flex-wrap md:flex-nowrap shadow-md bg-white rounded-2xl my-5">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col text-center justify-center">
              <span className="font-semibold title-font text-gray-700">PC USERS</span>
                <span className="mt-1 text-gray-500 text-sm">28/9/2023</span>
              </div>
              <div className="md:flex-grow">
                <h2 className=" text-gray-900 title-font mb-2  text-3xl font-bold">HOW TO INSTALL OFFICE 365 LIFETIME PRODUCT KEY WITHOUT PURCHASE </h2>
                <p className="leading-relaxed my-3">I can certainly help you with that! To use Office 365 for a lifetime, you'll need to Follow My Steps.</p>
                <Link className="no-underline" href=""><button className="button">Read More</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {footer()}
    </>
  )
}

export default notes