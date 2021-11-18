import React from 'react';
import Topic from './component/topic';
import './Landing.css';
import Display from './Display';
import Header from './component/header/Header';
import Footer from './component/Footer/Footer';




function Landing() {
  return (
    <div className = "main">
         <div className="animation-wrapper">
   
        <div className="boat"><img src="./krathong/hankluay.png" width="100%"></img></div>
       
      </div>
      <Display/>
      
      <svg>
  <filter id="turbulence" x="0" y="0" width="100%" height="100%">
    <feTurbulence id="sea-filter" numOctaves="3" seed="2" baseFrequency="0.02 0.05"></feTurbulence>
    <feDisplacementMap scale="20" in="SourceGraphic"></feDisplacementMap>
    <animate xlinkHref="#sea-filter" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1" values="0.02 0.06;0.04 0.08;0.02 0.06" repeatCount="indefinite"/>
  </filter>
</svg>
      <div className = "body">
        <header>
          <Header />
        </header>
        
        <body className="main-body">
        <h2 className="pak">การลอยกระทงในแต่ละภาค</h2>
          <Topic />
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    </div>
  );
}

export default Landing;
