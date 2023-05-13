/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    extend: {
      fontFamily: {
        linear: "Linear",
      },
      colors: {
        transparent: 'transparent',
        blueblack: '#07081C',
        white : '#fff',
        black : '#000',
        btnPrimary : '#6540D6',
        shadowBlue:'rgba(80, 63, 205, 0.5)',
        btnHoverBlack : 'rgba(255, 255, 255, 0.2)',
        btnBlueBlack :'rgba(255, 255, 255, 0.1)'
      
      },
      perspective: {

        20:'2000px'
      },
      keyframes: {
        insideout: {
          '0%': { transform: 'rotateX(20deg)' },
          '50%': { transform: 'rotateX(30deg) translateZ(-100px)' ,
                    
                },
          '99%':{transform: 'rotateX(5deg)',
                  background: '-webkit-radial-gradient(circle, hsla(247, 90%, 73%, 0.3) 0%, hsla(246, 80%, 18%, 0.3) 100%)',
                  boxShadow : '0px 10px 200px rgba(80, 63, 205, 0.9)'
                },
          '100%': {
                  boxShadow : '0px 10px 40px rgba(80, 63, 205, 0.2)',
                  transform: 'rotateX(0deg)',
                  // background : 'conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)',
                  backgroundImage : 'url("src/assets/Project_Solar_Sailer.png")',
                  backgroundSize:'cover'}
        },
        fadein:{
          '0%':{
            opacity : '0',
          },
          '100%' : {
            opacity : '1',
            transform : 'translateY(0px)',
          
          }

        },

        slidex : {
          '100%':{
            transform:'translateX(1000px)'
          }
        },
        slidey : {
          '100%':{
            transform:'translateY(500px)'
          }
        }

      },
      animation: {
        insideout: 'insideout 1s ease-in forwards ',
        fadein: 'fadein 500ms ease-in-out forwards',
        fadein2: 'fadein 500ms ease-in-out 500ms forwards',
        fadein3: 'fadein 500ms ease-in-out 1s forwards',
        slidex: 'slidex 2s infinite  linear',
        slidey: 'slidey 2s infinite  linear'

      },
      boxShadow:{
        btn: '0px 1px 40px rgba(80, 63, 205, 0.5)'
      }
    },
  },
  plugins: [require('@kamona/tailwindcss-perspective'),require('tailwindcss-3d')],
}