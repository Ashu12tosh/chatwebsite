import Image from 'next/image'
import { Inter } from 'next/font/google'
import First from  './components/page'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div className='text-black font-extrabold'>
  <First id="1" 
  num={2}/> 
  </div>
  )
}
