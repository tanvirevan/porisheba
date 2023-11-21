import Image from 'next/image'
import Navbar from './global-components/navbar/Navbar'
import Link from 'next/link'
import Userpage from "./pages/home/user/page"
export default function Home() {
  return (
    <div>
      <Userpage></Userpage>
    </div>
    
  )
}
