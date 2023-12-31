import React, { useState } from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'

export default function Navbar() {
  const [expandedMenu, setExpandedMenu] = useState(false)

  return (
    <nav
      className={
        expandedMenu
          ? `${styles.navigation_menu + ' ' + styles.expanded}`
          : styles.navigation_menu
      }
    >
      <button onClick={() => setExpandedMenu(!expandedMenu)}>
        <svg
          width={30}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul>
        <li>
          <Link href={'/'}>Home</Link>
        </li>
        <li>
          <Link href={'/Services'}>Services</Link>
        </li>
        <li>
          <Link href={'/Carrer'}>Carrer</Link>
        </li>
        <li>
          <Link href={'/Contact'}>Contact</Link>
        </li>
      </ul>
      <div id="icons">
        <Link target='_blank' href={'https://www.linkedin.com/in/yago-felipe-a3a7a81b2/'}>
          <img src="/images/linkedin.png" />
        </Link>
        <Link target='_blank' href={'https://github.com/LooseBleb'}>
          <img src="/images/github.png" />
        </Link>
        <Link target='_blank' href={'https://www.instagram.com/_yagofelipe_/'}>
          <img src="/images/instagram.png" />
        </Link>
      </div>
    </nav>
  )
}
