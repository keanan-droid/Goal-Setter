import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignInAlt, FaUserAlt } from 'react-icons'

function Header() {
  return (
      <header className='header'>
          <div className='logo'>
            <Link to='/'>Goal Setter</Link>
           </div>
            <ul>
                <li>
                    <Link to='/login'>
                        <FaSignInAlt />Login
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <FaUserAlt />Login
                    </Link>
                </li>
            </ul>
      </header>
  )
}

export default Header