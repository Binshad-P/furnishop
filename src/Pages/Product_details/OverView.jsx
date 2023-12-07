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
            <h3>Twin Cot with 2 Mattresses for Twins, Solid Wood, White, 120 x 120 cm</h3>
            {/* <h3>Eau De ToIlette Spray For Men 100ml</h3> */}
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
                        <td>Color</td>
                        <td>Wood color</td>
                    </tr>
                    <tr>
                        <td>Brand</td>
                        <td>Micoland</td>
                    </tr>
                    <tr>
                        <td>Material</td>
                        <td>Pine Wood</td>
                    </tr>
                    <tr>
                        <td>Furniture Finish</td>
                        <td>pine</td>
                    </tr>
                    <tr>
                        <td>style</td>
                        <td>Modern</td>
                    </tr>
                   
                   
                </table>
                <h6>About this item</h6>
                <p className='about-item-description'>The Bubema Nils baby bed is a must-have in any child's room. Thanks to the processed solid wood, the bed is very stable and will accompany your child through the first years.</p>
            </div>
        </div>
        <div className='section-right'>
        <div className="price">
          
            <h3>$38.98</h3>
            
           <table className='table2'>
          
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