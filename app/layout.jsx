/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Inter } from 'next/font/google';
import Navbar from '@/app/global-components/navbar/Navbar';

import './globals.css';


const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({ children}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
