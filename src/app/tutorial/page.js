import React from 'react'
import Image from 'next/image'
import footer from '@/app/components/footer'
import Link from 'next/link'

const tutorial = () => {
  return (
    <>
      <section className="text-gray-600 body-font font-Poppins">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src="/1.jpg" width={750} height={750} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FREE COURSE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">HTML</h2>
                <Link className="no-underline" href=""><button className="button">Start Now</button></Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src="/2.png" width={750} height={750} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FREE COURSE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">CSS</h2>
                <Link className="no-underline" href=""><button className="button">Start Now</button></Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src="/3.png" width={750} height={750} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FREE COURSE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">JAVASCRIPT</h2>
                <Link className="no-underline" href=""><button className="button">Start Now</button></Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src="/4.jpg" width={750} height={750} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FREE COURSE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">NEXT JS</h2>
                <Link className="no-underline" href=""><button className="button">Start Now</button></Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src="/5.jfif" width={750} height={750} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FREE COURSE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">PHYTON</h2>
                <Link className="no-underline" href=""><button className="button">Start Now</button></Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src="/6.jfif" width={750} height={750} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FREE COURSE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">APP DEVELOPMENT</h2>
                <Link className="no-underline" href=""><button className="button">Start Now</button></Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src="/7.jpg" width={750} height={750} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FREE COURSE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">WEB DEVELOPMENT</h2>
                <Link className="no-underline" href=""><button className="button">Start Now</button></Link>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image alt="ecommerce" className="object-cover object-center w-full h-full block" src="/8.jfif" width={750} height={750} />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">FREE COURSE</h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">ARTIFICAL INTELLIGENCE</h2>
                <Link className="no-underline" href=""><button className="button">Start Now</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {footer()}

    </>

  )

}



export default tutorial