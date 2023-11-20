import Image from 'next/image'
import Navbar from './global-components/navbar/Navbar'
import Link from 'next/link'
export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <div className='flex'>
      <p >
        <h2>porisheba hero</h2>
      </p>
      <p className='text-end'>
        porisheba body
      </p>
      </div>
    </main>
  )
}
