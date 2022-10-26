import React from 'react'
import './header.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'



import { Container, Row } from 'reactstrap'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {BsFillHeartFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FcBusinessman} from 'react-icons/fc'

const nav__links = [
  {
    path: 'home',
    display: 'Home'
  },
  {
    path: 'shop',
    display: 'Shop'
  },
  {
    path: 'cart',
    display: 'Cart'
  },
]

const Header = () => {
  return <header className='header'>
    <Container>
      <Row>
        <div className='nav__wrapper'>
        
          <div className='logo'>
          
          {/*probleme avec taille image 
          <img src={logo} alt='logo'/>
          */}
          <h1>DREAM ESCALE</h1>
          </div>
          
          <div className='navigation'>
            <ul className='menu'>
             
              {
                nav__links.map((item, index)=>(
                  <li className='nav__item' key={index}>
                    
                    <NavLink to={item.path} className={(navClass)=>
                    navClass.isActive ? 'nav__active' : ''}>{item.display}
                    </NavLink>                 
                  
                  </li>
                ))
              }
              
            </ul>
              
          </div>

          <div className='nav__icons'>
            
            <span className='heart__icon'>
            <BsFillHeartFill></BsFillHeartFill>
            <span className='badge'>1</span>
            </span>
            <span className='cart__icon'>
            <BsFillBagCheckFill></BsFillBagCheckFill>
            <span className='badge'>1</span>
            </span>
            <span className='user__icon'>
              <FcBusinessman></FcBusinessman>
            </span>
          </div>

          <div className='mobile__menu'>
            <span>
            <GiHamburgerMenu></GiHamburgerMenu>
            </span>
          </div>
           
        </div>
      </Row>
    </Container>
  </header>
    
  
}

export default Header
