import React from 'react';
import { Component } from 'react';
import './styleTemplate/template.css';
import Navbar from '../header/navbar';
import Article from '../article/article';
import AboutPage from '../aboutPage/about';
import Skills from '../skills/skills';
import Contact from '../contact/contact';
import stateContext from '../context/state';

class Template extends Component {
    state = {
        a: 0,
        colorPageOne: 'gray',
        colorPageTwo: 'black',
        colorPageThree: 'black',
        colorPageFour: 'black',
        borderLiOne : '2px solid' ,
        borderLiTwo : 'none' ,
        borderLiThree : 'none' ,
        borderLiFour : 'none'
    };
    static contextType = stateContext;
    render() {
        return (
            <>
            <stateContext.Provider value={{
             handelBorderLi: this.handelBorderLi,
             a: this.state.a,
             borderLiOne: this.state.borderLiOne,
             borderLiTwo: this.state.borderLiTwo,
             borderLiThree: this.state.borderLiThree,
             borderLiFour: this.state.borderLiFour,
             }}>
                  <Navbar  loadContactPage={this.contactPage} loadSkillsPage ={this.pageSkills} loadPageInfo={this.pageInfo} loadPageAbout={this.pageAbout} />
                <div className='master'>
                    <i id='iFirstBefore' onClick={this.beforePage} style={{ fontSize: '50px' }} className="ri-arrow-left-wide-line"></i>
                    {this.loadComponents()}
                    <i id='iLastNext' onClick={this.nextPage} style={{ fontSize: '50px' }} className="ri-arrow-right-wide-line"></i>
                </div>
                <div className="countPageParent">
                    <div style={{ backgroundColor: this.state.colorPageOne }} className="countPage1"></div>
                    <div style={{ backgroundColor: this.state.colorPageTwo }} className="countPage2"></div>
                    <div style={{ backgroundColor: this.state.colorPageThree }} className="countPage3"></div>
                    <div style={{ backgroundColor: this.state.colorPageFour }} className="countPage4"></div>
                </div>
                </stateContext.Provider>
            </>
        );
    }
    handelBorderLi = ()=>{
        let {a} = this.state      
        if(a === 0){
            this.setState({borderLiOne : '2px solid' , borderLiTwo : 'none' , borderLiThree : 'none' , borderLiFour : 'none'});
        }
         if(a === 1) {
            this.setState({borderLiOne : 'none' , borderLiTwo : '2px solid' , borderLiThree : 'none' , borderLiFour : 'none'});
        }
         if(a === 2){
            this.setState({borderLiOne : 'none' , borderLiTwo : 'none' , borderLiThree : '2px solid' , borderLiFour : 'none'})
        }
         if(a === 3){
            this.setState({borderLiOne : 'none' , borderLiThree : 'none' , borderLiTwo : 'none' , borderLiFour : '2px solid'})
        }
        }
    pageInfo = () =>{
        let newPage = 0;
        this.setState({a : newPage} , this.loadCountPage);
    }
    pageAbout = () =>{
        let newPage  = 1;
        this.setState({a : newPage} , this.loadCountPage)
    }
    pageSkills =() =>{
        let newPage = 2;
        this.setState({a : newPage} , this.loadCountPage);
    }
    contactPage = () =>{
        let newPage = 3 ;
        this.setState({a : newPage} , this.loadCountPage);
    }
    nextPage = () => {
        let { a } = this.state;
        this.setState({ a: a + 1 }, this.loadCountPage);
        setInterval(()=>{
            this.handelBorderLi();
        }, 1000)
        if(a > 2){
            this.setState({a : 0} , this.loadCountPage);
        }
    };
    beforePage = () =>{
        let {a} = this.state;
        if(a > 0){
        this.setState({a : a - 1}, this.loadCountPage);
    }
    else if(a === 0){
    this.setState({a : 3} , this.loadCountPage);
    }
    setInterval(()=>{
        this.handelBorderLi();
    }, 1000)
    }
    loadCountPage = () => {
        let { a } = this.state;
        if(a === 0){
            this.setState({colorPageOne : 'gray' , colorPageTwo : 'black' , colorPageThree:'black' , colorPageFour:'black'})
        }
         if (a === 1) {
            this.setState({ colorPageFour : 'black',colorPageThree: 'black',colorPageOne: 'black', colorPageTwo: 'gray' });
        }
        if (a === 2) {
            this.setState({ colorPageFour : 'black',colorPageOne: 'black',colorPageTwo: 'black', colorPageThree: 'gray' });
        } 
        if (a === 3) {
            this.setState({ colorPageTwo : 'black',colorPageOne : 'black',colorPageThree: 'black', colorPageFour: 'gray' });
        }
    };

    loadComponents = () => {
        let { a } = this.state;
        if (a === 0) {
            return <Article loadContactPage={this.contactPage} />;
        }
        else if(a === 1){
            return <AboutPage/>;
        }
        else if(a === 2){
            return <Skills/>
        }
        else if(a === 3){
            return <Contact/>
        }
    };
}

export default Template;