import React from 'react'
import { useState,useEffect,useRef } from 'react'

const Hero = () => {

    const sectionRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-insideout');
            observer.unobserve(entry.target);
          }
        });
      },{ threshold: [0.8] });
      observer.observe(sectionRef.current);
    }, []);

  return (
    <>
         <button className='transition ease-in-out duration-150 flex flex-row justify-between items-center pl-3 pr-0 bg-btnBlueBlack  font-semibold rounded-2xl align-middle mt-10 mb-10 hover:bg-btnHoverBlack animate-fadein  '
        style={{
          animationFillMode: 'forwards',
          transform: 'translateY(-10px)',
          opacity: '0',
          border : '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop : '0.25rem',
          paddingBottom : '0.35rem',
          marginTop: '10rem'
          
        }}
        >
          <div
          className='text-white text-sm flex justify-center items-center  '
          style ={
            {
              color : 'rgb(247, 248, 248,0.8)',
            }
          }
          >Introducing Linear Insights</div>
          <span className='text-white px-2 ml-2 mr-1 rounded-2xl text-sm '
           style={{
            background : 'rgba(255, 255, 255, 0.05)',
            color : 'rgb(247, 248, 248)',
            paddingTop : '0.01rem',
            paddingBottom : '0.01rem',
          }}
          >→</span>
        </button>
        <h1 className='font-linear  text-white text-center animate-fadein '
          style ={{
            animationFillMode: 'forwards',
           transform: 'translateY(-10px)',
           opacity: '0',
           fontSize : '5rem',
           letterSpacing : '-0.02rem',
           lineHeight:'5rem',
           background: 'linear-gradient(to right bottom,rgb(255, 255, 255) 30%, rgba(255, 255, 255, 0.38))',
           WebkitBackgroundClip: 'text',
           WebkitTextFillColor: 'transparent'
          }}
        >Linear is a better way <br/>
          to build products</h1>

        <p className='text-center mt-5 font-linear hover:text-black animate-fadein2' 
        style = {{
          transform: 'translateY(-10px)',
          opacity:'0',
          fontSize : '22px',
          color: 'rgb(180, 188, 208)'

        }}
        
        >Meet the new standard for modern software development.<br/>
        Streamline issues, sprints, and product roadmaps.</p>

        <button className='transition ease-in-out duration -200 flex flex-row justify-between items-center px-6  rounded-full m-0 my-10 hover:shadow-btn animate-fadein3 '
          style = {{
            transform: 'translateY(-10px)',
            opacity:'0',
            backgroundColor : '#6540D6',
            paddingBottom: '0.75rem',
            paddingTop : '0.75rem'
          }}

        >
          <span className='text-white  mr-2  font-linear ' style = {{fontSize : '1.1rem'}}>Get started</span> 
          <svg width="16" height="16" viewBox="0 0 16 16" fill="#FFF"  >
            <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z">
            </path>
          </svg>
        </button>

        <div class="perspective-20 mt-10 " style ={{
        }}>
            <div className="origin-bottom  mt-10 rounded-md relative  " ref={sectionRef} style={{animationFillMode: 'forwards',
            backgroundImage : 'radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)',
            transform: 'rotateX(10deg)',width:'1197px', height:'672px', backgroundColor:'#0A0B20' ,border: '0.01rem solid #262C58'}}>
              <div className='absolute top-0 w-32 animate-slidex' style={{
                height: '1px',
        
                background: 'linear-gradient(to left,#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)'
              }}></div>
              <div className='absolute top-0 right-0 h-32 animate-slidey' style={{
                width: '1px',
                background: 'linear-gradient(to top,#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)'
              }}></div>
            </div>  
            
        </div>

    </>
  )
}

export default Hero