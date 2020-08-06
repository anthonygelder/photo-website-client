import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

class Header extends Component {
  render() {
    return (
        <header>
            {/* <img src={ require('../img/Untitled.png')} alt="logo"/> */}

            <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>
              <h1 className="hello">about</h1>
            </Link>
        </header>
    )
  }
}
export default Header;