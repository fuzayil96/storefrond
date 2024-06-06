import React from 'react'
import './header.css'
import Search from '../search/search'

function Header() {
  return (
    <header className="header-grid">
      <nav>
        <ul>
          <li>
            <button>Shop</button>
          </li>
          <li>
            <button>Pages</button>
          </li>
          <li>
            <button>Blog</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
          <li className="seachbar">
            <Search />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
