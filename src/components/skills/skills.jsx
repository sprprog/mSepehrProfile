import React from 'react';
import { Component } from 'react';
import './styling/skills.css'

class Skills extends Component{
    render(){
        return(
            <>
            <div className="masterSkill">
                            <p style={{color : 'gray'}}>Expelor My</p>
                            <h1>Experience</h1>
            <div className='flexBox'>
                <div className="skills">
                <h2 style={{color : 'gray'}}>Frontend Development</h2>
                <div className="items">
                  <div className='div'>
                <p><i class="ri-html5-fill"></i>Html</p>
                <p><i class="ri-css3-fill"></i>Css</p>
                </div>
                <div className='div'>
                <p><i class="ri-javascript-fill"></i>JavaScript</p>
                <p><i class="ri-reactjs-fill"></i>React.Js</p>
                </div>
                </div>
                </div>
                <div className="skills">
                  <h2 style={{color : 'gray'}}>Compilation and design</h2>
                  <div className="items">
                    <p><i class="ri-video-line"></i>Adobe Premiere</p>
                    <p><i class="ri-image-edit-fill"></i>Adobe Photoshop</p>
                  </div>
                </div>
            </div>
            </div>
            </>
        )
    }
} 

export default Skills;