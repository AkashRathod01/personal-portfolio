import React from 'react'
import "./contact.scss"
import { useState } from 'react'

export default function Contact() {
    // const [message, setMessage] = useState(false)
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setMessage(true)
    // } (onSubmit={handleSubmit}) --> write inside form keyword
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img className='image' src="assets/contact.png" alt="" />
            </div>
            <div className="right">
                <h2>SEND ME AN EMAIL</h2>
                <form action="https://formspree.io/f/xzbqzjjq" method="POST">
                    <input type="text" name='Name' className='half-input' placeholder='Name *' required />
                    <input type="number" name='Phone' className='half-input' placeholder='Phone No. *' required />
                    <input type="email" name='Email' placeholder='Email Address *' required />
                    <input type="text" name='Subject' placeholder='Subject *' required />
                    <textarea name='Message' cols="30" rows="4" placeholder='Message *' required ></textarea>
                    <button type='submit' className='btn btn-primary'>Send</button><br />
                    {/* {message && <span className='sub-mess'>Thanks, I'll reply ASAP :)</span>} */}
                </form>
            </div>
        </div>
    )
}
