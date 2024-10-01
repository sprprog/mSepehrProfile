import React from 'react' ;
import { Component } from 'react';
import './styleArticle/article.css';
import myImage from './img/my profile youtube1.png';
import myCv from './cv/Mohammad_Sepehr_Khosravi_Attractive_Resume.pdf'
class Article extends Component{
    render(){
        return(
            <>
            <div className="article">
                <div className="image-article">
                <img  src={myImage} alt="profile-sepehr" />
                </div>
                <div className="text-article">
                <p  style={{color : 'rgb(68, 68, 68)'}}>Hello, I'm</p>
                <h1 style={{color : 'black'}}>Sepehr Khosravi</h1>
                <h1 style={{color : 'rgb(68, 68, 68)' }} id='text-article-nth3'>Frontend Developer</h1>
                <div className='buttons-article'>
                    <button onClick={this.handelContactPage} id='linkYoutube'>contactInfo</button>
                    <button onClick={this.downloadCv} id='cv'>donload cv</button>
                </div>
                <i id='iconLinkGit' class="ri-github-fill"></i>
                </div>
            </div>
            </>
        )
    }
    handelContactPage = () =>{
        this.props.loadContactPage();
    }
    downloadCv = () => {
        const link = document.createElement('a');
        link.href = myCv; 
        link.download = 'Mohammad_Sepehr_Khosravi_Resume.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
}

export default Article;