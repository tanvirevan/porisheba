import Navbar from './global-components/navbar/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Porisheba',
  description: 'Porisheba takes the concept of task outsourcing to a whole new level, offering a seamless platform for users to effortlessly delegate tasks and find trusted experts for any job, big or small. With a unique blend of innovative features. Porisheba ensures a premium experience for both TaskHolders and Taskers.',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
      </html>
  )
}
