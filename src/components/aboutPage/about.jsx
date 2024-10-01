import React from 'react' ;
import { Component } from 'react';
import './styleAboutPage/about.css'
import myImage from './img/my profile.png';
class AboutPage extends Component{
    render(){
        return(
            <>
            <div className='master'>
                <div className="contentAbout">
                <p className='paragraphOne' style={{color : 'rgb(92, 92, 92)'}}>Get To Know More</p>
                <h1 className='h1TagContent' style={{color : 'black'}}>About Me</h1>
                <div className="contentInfo">
                <div className="profile">
                        <img src={myImage} alt="sepehr-profile" />
                    </div>
                    <div className="info">
                    <div className="textInfo">
                        <div className="text">
                            <h2>Experience</h2>
                            <p>2 years</p>
                            <p>Frontend Development</p>
                        </div>
                        <div className="text">
                            <h2>Education</h2>
                            <p>Middle School (Grade 8) | Ongoing</p>
                            <p>Self-taught in Frontend Development (2 years)</p>
                        </div>
                    </div>
                    <div className="textInfoSepehr">
                    <p>Hello, my name is Mohammad Sepehr Khosravi, I am 14 years old and I am a front-end web developer and I will do my best to provide you with the best quality.</p>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default AboutPage;