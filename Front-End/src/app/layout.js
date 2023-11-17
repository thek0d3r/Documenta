import { Inter } from 'next/font/google'
import './globals.css'
<<<<<<< Updated upstream
import Navbar from './Navbar/Navbar'
=======
import Navbar from './Navbar'
>>>>>>> Stashed changes

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Documenta',
  description: 'Your virutal document assistant.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="background-gradient"></div>
        <Navbar/>
        </body>
    </html>
  )
}
