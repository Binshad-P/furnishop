import React from 'react'
import "../../assets/img8.png"
import '../Contact/Contact.css'
const Contact = () => {
  return (
    <div className='Contact'>
        <div className='contents'>
            <h1>Get more discount<br/> Off your Order </h1>
            <p>join our mailinglist</p>
            <div className='form'>
                <input type='text' placeholder='your email adress'/>
                 <button type='submit'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Contact