import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className="footer border-t border-t-[#33353F] text-brown-400 text-lg py-6">
      <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Brand Name */}
        <span className="text-brown-400 text-xl font-[Ballet]">Kulsoom</span>
        
        {/* Copyright Text */}
        <p className="text-slate-600 text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Social Links */}
        <ul className="flex gap-4 justify-center md:justify-end">
          <li>
            <Link href="https://github.com/KULSOOMadnan" aria-label="GitHub">
              <p className="fa-brands fa-github text-xl hover:text-brown-600"></p>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com" aria-label="Instagram">
              <p className="fa-brands fa-instagram text-xl hover:text-brown-600"></p>
            </Link>
          </li>
          <li>
            <Link href="https://www.facebook.com" aria-label="Facebook">
              <p className="fa-brands fa-facebook text-xl hover:text-brown-600"></p>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/kulsoomadnan/" aria-label="LinkedIn">
              <p className="fa-brands fa-linkedin text-xl hover:text-brown-600"></p>
            </Link>
          </li>
          <li>
            <Link href="mailto:adnanirfan282@gmail.com" aria-label="Email">
              <p className="fa-regular fa-envelope text-xl hover:text-brown-600"></p>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
