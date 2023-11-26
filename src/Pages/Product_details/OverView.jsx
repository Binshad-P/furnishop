import React from 'react'
import {BiSolidStar,BiSolidStarHalf,} from 'react-icons/bi';
import {IoIosArrowDown} from 'react-icons/io';
import {AiOutlineHeart} from 'react-icons/ai';
import './OverView.css'
const OverView = () => {
  return (
    <div className='OverView'>
        <div className='section-left'>
            <div className='Title'>
            <h3>Versace Eros</h3>
            <h3>Eau De ToIlette Spray For Men 100ml</h3>
            </div>
            <div className='rating'>
            <div className='starzz'>
                <BiSolidStar size={13}/>
                <BiSolidStar size={13}/>
                <BiSolidStar size={13}/>
                <BiSolidStar size={13}/>
                <BiSolidStarHalf size={13}/>

            </div>
            <p>4.5/152 Rtaing </p>
            <p>32 Reviews</p>
            <p>24 Answered Questions</p>
            </div>
            <div className='descps'>
             
                <table className='table1'>
                    <tr>
                        <td>Brand</td>
                        <td>Brand</td>
                    </tr>
                    <tr>
                        <td>Ideal For</td>
                        <td>Men</td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>100 ml</td>
                    </tr>
                    <tr>
                        <td>Country of Origin</td>
                        <td>India</td>
                    </tr>
                    <tr>
                        <td>Sales Package</td>
                        <td>Whisky Smoke Perfume</td>
                    </tr>
                    <tr>
                        <td>Brand</td>
                        <td>Brand</td>
                    </tr>
                   
                </table>
                <h6>About this item</h6>
                <p>packing for this product way from that shown in the about.</p>
            </div>
        </div>
        <div className='section-right'>
        <div className="price">
          
            <h3>$38.98</h3>
            
           <table className='table2'>
            <tr>
                <td>100ml</td>
                <td><IoIosArrowDown/></td>
            </tr>
            <tr>
                <td>Delivery</td>
                <td><IoIosArrowDown/></td>
            </tr>
            <tr>
                <td>Shopping</td>
                <td><IoIosArrowDown/></td>
            </tr>
            <tr>
                <td>Reviews</td>
                <td><IoIosArrowDown/></td>
            </tr>
           </table>
        </div>
        <div className='buttons'>
        <button type='submit'>Add to Cart</button>
        <button type='submit'>Buy Now</button>
        <button type='submit'><AiOutlineHeart/>Favroties</button>
        </div>
        </div>
    </div>
  )
}

export default OverView