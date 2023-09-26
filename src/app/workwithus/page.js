import React from 'react'
import footer from '../components/footer'

const workwithus = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative font-Poppins">
        <div className="absolute inset-0 bg-gray-300">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435519.22742707474!2d74.00472007319846!3d31.483103657702156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694839857732!5m2!1sen!2s" width="100%" height="100%" ></iframe>
         
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <p className='text-gray-500 text-base'>Pakistan Only!</p>
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Apply Now</h2>
            <div className="relative mb-2">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="email" name="email" className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

            </div>
            <div className="relative mb-2">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="text" id="email" name="email" className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

            </div>
            <div className="relative mb-2">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone Number</label>
              <input type="text" id="email" name="email" className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

            </div>
            <div className="relative mb-2">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Link For Resume</label>
              <input type="text" id="email" name="email" className="w-full bg-gray-100 rounded border border-transparent outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

            </div>
            <div className="relative mb-2">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">Skills</label>

              <div className="flex justify-center flex-col">
                <label className='my-1'>
                  <input type="checkbox" className="radio" value="1" name="fooby[1][]" />  FrontEnd Developer  </label>
                <label className='my-1'>
                  <input type="checkbox" className="radio" value="1" name="fooby[1][]" />  BackEnd Developer</label>
                <label className='my-1'>
                  <input type="checkbox" className="radio" value="1" name="fooby[1][]" />  Artifical Intelligence</label>

                <label className='my-1'>
                  <input type="checkbox" className="radio" value="1" name="fooby[2][]" />  App Development</label>
                <label className='my-1'>
                  <input type="checkbox" className="radio" value="1" name="fooby[2][]" />  Phyton</label>
                <label className='my-1'>
                  <input type="checkbox" className="radio" value="1" name="fooby[2][]" />  Next Js Full Stack
                </label>
              </div>
            </div>
            <button required className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg cursor-pointer">Submit</button>
          </div>
          
        </div>
       

      </section>
      {footer()}
    </>
  )
}

export default workwithus