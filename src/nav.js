import React, { useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { FaTruckMoving } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BsBagCheck } from 'react-icons/bs'
import { CiLogin } from 'react-icons/ci'
import { CiLogout } from 'react-icons/ci'
import './nav.css'
import { Link } from 'react-router-dom'

const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>

    {/* start nav icon */}
    <div className='free'>
        <div className='icon'>
        <FaTruckMoving/>
        </div>
        <p>FREE shipping when shopping upto TSH 100,000</p>
    </div>
    {/* end nav icon */}

    {/* start main header */}
    <div className='main_header'>
        <div className='container'>
            <div className='logo'>
                <img src='./img/logob.svg' alt='logo'></img>
            </div>

            {/* search box here! */}
            <div className='search_box'>
                <input type='text' value={search} placeholder='Search For Product...' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => searchbtn (search)}>Search</button>
            </div>

            <div className='icon'>
                {
                    isAuthenticated &&
                    (
                        <div className='account'>
                            <div className='user_icon'>
                            <AiOutlineUser/>
                            </div>
                            <p>Holla, {user.name}</p>
                        </div>
                    )
                }
                
                <div className='second_icon'>
                    <Link to="/" className='link'><AiOutlineHeart/></Link>
                    <Link to="/cart" className='link'><BsBagCheck/></Link>
                </div>
            </div>
        </div>
    </div>
    {/* end main header */}

    {/* start header */}
    <div className='header'>
        <div className='container'>
            <div className='nav'>
                <ul>
                    <li>
                        <Link to='/' className='link'>Home</Link>
                    </li> {/* link to home */}

                    <li>
                        <Link to='/product' className='link'>Product</Link>
                    </li> {/* link to product */}

                    <li>
                        <Link to='/about' className='link'>About</Link>
                    </li> {/* link to about */}

                    <li>
                        <Link to='/contact' className='link'>Contact</Link>
                    </li> {/* link to contact */}
                </ul>
            </div>
            
            <div className='auth'>
                {
                    isAuthenticated ?
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
                    :
                    <button onClick={ () => loginWithRedirect() }><CiLogin/></button>
                }
            </div>
        </div>
    </div>
    {/* end header */}

    </>
  )
}

export default Nav