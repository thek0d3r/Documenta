import './globals.css'

export const metadata = {
  title: 'Documenta',
  description: 'Your virutal document assistant.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>   
        {children}
      </body>
    </html>
  )
}
