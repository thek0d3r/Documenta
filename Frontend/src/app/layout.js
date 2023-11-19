import './globals.css'
import favicon from '../../public/favicon.ico'

export const metadata = {
  title: 'Documenta',
  description: 'Your virutal document assistant.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href={favicon} sizes="any" />
      <body>   
        {children}
      </body>
    </html>
  )
}
