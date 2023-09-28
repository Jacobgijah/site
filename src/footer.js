import React from 'react'
import { RiLinkedinFill, RiTwitterXLine } from 'react-icons/ri'
import { AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai'
import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    <img src='./img/logob.svg' alt='logob'></img>
                </div>

                <div className='detail'>
                    <p>We are team of designers and developers that create high quality WordPress</p>
                    <div className='icon'>
                        <li><RiLinkedinFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><RiTwitterXLine /></li>
                        <li><AiOutlineGithub /></li>
                    </div>
                </div>
            </div>

            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>

            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer