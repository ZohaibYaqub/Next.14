

import Newheader from '@/app/components/newheader'
import main from './components/main'


import './globals.css'
import { Ubuntu } from 'next/font/google'



const ubuntu = Ubuntu({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: 'Learning Skills',

}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={ubuntu.className}>

      <body >

        <Newheader />
        {main()}


        {children}
      </body>
    </html>
  )
}
