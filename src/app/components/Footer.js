import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='footer border border-t-[#33353F] border-l-transparent border-r-transparent text-brown-400 text-xl'>
        <div className='container p-10 flex justify-between '>
            <span className='text-brown-400 text-xl font-[Ballet] '>Kulsoom</span>
            <p className='text-slate-600 text-sm'> &copy; {new Date().getFullYear()} All rights reserved.</p>
            <ul className="flex justify-end gap-3 ">
            <li>
              <Link href="https://github.com/KULSOOMadnan"><p className="fa-brands fa-github"></p></Link>
            </li>
            <li><Link href="https://www.instagram.com"> <p className="fa-brands fa-instagram"></p></Link>
            </li>
            <li><Link href="https://www.facebook.com"><p className="fa-brands fa-facebook"></p></Link>
            </li>
            <li><Link href="https://www.linkedin.com/in/kulsoomadnan/"><p className="fa-brands fa-linkedin"></p></Link>
            </li>
            <li><Link href="mailto:adnanirfan282@gmail.com"><p className="fa-regular fa-envelope"></p></Link>
            </li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer