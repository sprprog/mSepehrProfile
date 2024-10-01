import React from 'react' ;
import { Component } from 'react';
import './styleHeader/navbar.css';
import stateContext from '../context/state';
class Navbar extends Component{
    static contextType = stateContext;
    render(){
        return(<>
            <div className='navbar'>
            <nav>
                <ul>
                    <li style={{borderBottom : this.context.borderLiOne}} onClick={this.handelPageInfo}>SepehrProfile</li>
                    <li style={{borderBottom : this.context.borderLiTwo}} onClick={this.handelPageAbout}>About</li>
                    <li style={{borderBottom : this.context.borderLiThree}} onClick={this.handelLoadPageSkills}>Experience</li>
                    <li style={{borderBottom : this.context.borderLiFour}} onClick={this.handelPageContact}>Contact</li>
                    <li onClick={this.openMenu}><i class="ri-menu-line"></i></li>
                </ul>
            </nav>
            </div>
            <div className="sidebar" id='Side'>
                <ul>
                    <li onClick={this.closeMenu}><i class="ri-close-large-line"></i></li>
                    <li style={{borderBottom : this.context.borderLiOne}} onClick={this.handelPageInfo}>SepehrProfile</li>
                    <li style={{borderBottom : this.context.borderLiTwo}} onClick={this.handelPageAbout}>About</li>
                    <li style={{borderBottom : this.context.borderLiThree}} onClick={this.handelLoadPageSkills}>Experience</li>
                    <li style={{borderBottom : this.context.borderLiFour}} onClick={this.handelPageContact}>Contact</li>
                </ul>
            </div>
            </>
        )
    }
    handelPageInfo =()=> {
    this.props.loadPageInfo();
    this.closeMenu()
    }
    handelPageAbout = ()=>{
        this.props.loadPageAbout();
        this.closeMenu()
    }
    handelLoadPageSkills =()=>{
        this.props.loadSkillsPage();
        this.closeMenu()
      }
      handelPageContact = () =>{
        this.props.loadContactPage();
        this.closeMenu();
      }
    openMenu = () =>{
        let sidebar = document.getElementById('Side');
        sidebar.style.right = '0%';
       }
       closeMenu = () =>{
           let sidebar = document.getElementById('Side');
            sidebar.style.right = '-70%'   
       }
}

export default Navbar