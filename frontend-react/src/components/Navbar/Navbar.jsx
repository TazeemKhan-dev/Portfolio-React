import React from 'react'
import './Navbar.scss'
import {images} from '../../constants'
const Navbar = () => {
    const nav=['home','about','contact','work','skills']
  return (
    <nav>
        <div>
            <img src={images.logo} alt="logo" />
        </div>
        <ul>
            {
                nav.map((item)=>(
                    <li key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default Navbar