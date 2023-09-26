import React from 'react'
import Link from 'next/link'
import { BsTwitter } from 'react-icons/bs';
import { GrSnapchat } from 'react-icons/gr';
import { IoLogoWhatsapp } from 'react-icons/io';
import { BsGithub } from 'react-icons/bs';
import footer from '../components/footer';
import Image from 'next/image'


const contact = () => {
  return (
    <>
      <div className="flex justify-center items-center my-16 font-Poppins  ">
        <div className="shadow-2xl w-3/4 flex justify-center items-center flex-col py-16 ">
          <h2 className='py-6 text-3xl'>Feel Free To Contact Me!</h2>
          <Image src="/pic.png" alt="mypic" width={130} height={130} className='rounded-full'/>

          <span className='flex cursor-pointer my-6 '>

            <Link href="https://www.facebook.com/profile.php?id=100090786762444" target='_blank'><i className=' text-purple-800 px-4 text-4xl  '>{BsGithub()}</i></Link>



            <Link href="https://twitter.com/zohaibyaqub" target='_blank'><i className='px-4 text-4xl text-purple-800  '>{BsTwitter()}</i></Link>



            <Link href="https://www.instagram.com/its.zaibiii/?igshid=MzNlNGNkZWQ4Mg==" target='_blank'><i className='px-4  text-4xl text-purple-800  '>{GrSnapchat()}</i></Link>



            <Link href="https://api.whatsapp.com/qr/J5PPENYRPZJKC1?autoload=1&app_absent=0" target='_blank'><i className='px-4 text-4xl text-purple-800  '>{IoLogoWhatsapp()}</i></Link>


          </span>
        </div>
      </div>
      {footer()}
    </>
  )
}

export default contact