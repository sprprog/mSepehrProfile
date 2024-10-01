import React from 'react';
import { Component } from 'react';
import './styling/contact.css';

class Contact extends Component{
    render(){
        return(
            <div className='masterDiv'>
            <p>Get in Touch</p>
            <h1>Contact Me</h1>
            <div className="emailBox">
                <h1><i class="ri-mail-line"></i>Example@gmail.com</h1>
            </div>
            </div>
        )
    }
}

export default Contact;