import './globals.css'
import Navbar from './Navbar/Navbar'
import Link from 'next/link'

export const metadata = {
  title: 'Documenta',
  description: 'Your virutal document assistant.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>    
        <div id="background-gradient" className='z-0'></div>
        <Navbar/>  
        {children}
        </body>
    </html>
  )
}
