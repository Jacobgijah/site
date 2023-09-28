import React from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight, BsEye } from 'react-icons/bs'
import { FiTruck } from 'react-icons/fi'
import { BsCurrencyDollar } from 'react-icons/bs'
import { CiPercent } from 'react-icons/ci'
import { BiHeadphone } from 'react-icons/bi'
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai'
import './home.css'
import Homeproduct from './homeproduct'

const Home = ({detail, view, close, setClose, addtocart}) => {
  return (
    <>
        {
        close ?
        <div className='product_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineCloseCircle /></button>
            {
                detail.map((curElm) =>
                {
                    return(
                        <div className='productbox'>
                            <div className='img-box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                            </div>
                            <div className='detail'>
                                <h4>{curElm.Cat}</h4>
                                <h2>{curElm.Title}</h2>
                                <p>A screen Everyone Will Love: Whether your family is streaming or video chatting with friends...</p>
                                <h3>Tsh{curElm.Price}</h3>
                                <button>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
            <div className='productbox'></div>
        </div>
    </div> : null
    }

    {/* start top banner */}
    <div className='top_banner'>
        <div className='container'>
            <div className='detail'>
                <h2>The Best Note Book Collection 2023</h2>
                <Link to='/product' className='link'>Shop Now <BsArrowRight /></Link>
            </div>

            <div className='img_box'>
                <img src='./img/slider_img.png' alt='sliderimg'></img>
            </div>
        </div>
    </div>
    {/* end top banner */}

    {/* start product type */}
    <div className='product_type'>
        <div className='container'>
            <div className='box'>
                <div className='img_box'>
                    <img src='./img/product1.png' alt='product1'></img>
                </div>

                <div className='detail'>
                    <p>25 products</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src='./img/nike.png' alt='nike'></img>
                </div>

                <div className='detail'>
                    <p>15 products</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src='./img/shorts.png' alt='shorts'></img>
                </div>

                <div className='detail'>
                    <p>5 products</p>
                </div>
            </div>

            <div className='box'>
                <div className='img_box'>
                    <img src='./img/tshirt.png' alt='tshirt'></img>
                </div>

                <div className='detail'>
                    <p>5 products</p>
                </div>
            </div>
        </div>
    </div>
    {/* end product type */}

    {/* start about section */}
    <div className='about'>
        <div className='container'>
            <div className='box'>
                <div className='icon'>
                    <FiTruck />
                </div>

                <div className='detail'>
                    <h3>Free Shipping</h3>
                    <p>Order above TSH 100,000</p>
                </div>
            </div>

            <div className='box'>
                <div className='icon'>
                    <BsCurrencyDollar />
                </div>

                <div className='detail'>
                    <h3>Return & Refund</h3>
                    <p>Money Back Gaurenty</p>
                </div>
            </div>

            <div className='box'>
                <div className='icon'>
                    <CiPercent />
                </div>

                <div className='detail'>
                    <h3>Member Discount</h3>
                    <p>On every Order</p>
                </div>
            </div>
            
            <div className='box'>
                <div className='icon'>
                    <BiHeadphone />
                </div>

                <div className='detail'>
                    <h3>Customer Support</h3>
                    <p>Every Time Call Support</p>
                </div>
            </div>
        </div>
    </div>
    {/* end about section */}

    {/* start product */}
    <div className='product'>
        <h2>Top Products</h2>
        <div className='container'>
            {
                Homeproduct.map((curElm) => 
                {
                    return (
                        <div className='box' key={curElm.id}>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
                                <div className='icon'>
                                    <li onClick={() => addtocart (curElm)}><AiOutlineShoppingCart /></li>
                                    <li onClick={() => view (curElm)}><BsEye /></li>
                                    <li><AiOutlineHeart /></li>
                                </div>
                            </div>

                            {/* product_detail */}
                            <div className='detail'>
                                <p>{curElm.Cat}</p>
                                <h3>{curElm.Title}</h3>
                                <h4>Tsh{curElm.Price}</h4>
                            </div>    
                        </div>
                    )
                })
            }
            <div className='box'></div>
        </div>
    </div>
    {/* end product */}

    {/* start of banner section */}
    <div className='banner'>
        <div className='container'>
            <div className='detail'>
                <h4>LATEST TECHNOLOGY ADDED</h4>
                <h3>Apple iPhone 15 10th Gen - 2023</h3>
                <p>$990</p>
                <Link to='/product' className="link">Shop Now  <BsArrowRight /></Link>
            </div>

            <div className='img_box'>
                <img src='./img/slider_img.png' alt='slider_img'></img>
            </div>
        </div>
    </div>
    {/* end of banner section */}
    </>
  )
}

export default Home