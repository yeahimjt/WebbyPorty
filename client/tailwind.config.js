/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    screens: {
        'homepage-text': '980px',
        'homepage-hi': '950px',
        'homepage-hi2': '900px',
        'homepage-hi3': '725px',
        'homepage-hi4': '400px',
        'homepage-header': '821px',
        'profile-icon': '620px',
        'mobile': '620px',
        'tablet': '1200px',
        'large': '1500px',
        'project-button':'580px',
        'title': '800px',
        'smallest':'520px',
      },
      transitionDelay: {
        '0': '0ms',
        '2000': '2000ms',
       },
      borderRadius: {
        'right':'10px 0px 0px 10px',
        'left':'0px 10px 10px 0px',
      },
      backgroundImage: {
        'test': "linear-gradient(269.79deg, #16D9E3 2.48%, #30C7EC 54.74%, #46AEF7 99.9%)",
        'homepage': 'linear-gradient(180deg, #FFFFFF 0%, #F0EDE5 100%)',
        'homepage-dark': 'linear-gradient(180deg, #333333 0%, #1D1D1D 100%)',
        'projects': 'linear-gradient(180deg, #F0EDE5 0%, #FFFFFF 100%)',
        'projects-dark': 'linear-gradient(180deg, #1D1D1D 0%, #333333 100%, #333333 100%)',
        'profile': 'linear-gradient(180deg, #FFFFFF 0%, #F0EDE5 100%)',
        'profile-dark': 'linear-gradient(180deg, #333333 0%, #1D1D1D 100%)',
        'contact': 'linear-gradient(180deg, #F0EDE5 0%, #FFFFFF 100%)',
        'contact-dark': 'linear-gradient(180deg, #1D1D1D 0%, #333333 100%)',


      },
      fontFamily: {
        'heading': ['Cinzel','sans-serif'],
        'paragraph': ['Fauna One','sans-serif'],
      },
      animation: {
        slideup: 'slideup 0.2s ease-in-out forwards',
        slidedown: 'slidedown 0.5s ease-in-out forwards',
        slideleft: 'slideleft 2s ease-in-out forwards',
        slideright: 'slideright 2s ease-in-out forwards',
        wave: 'wave 1.2s linear ease-in-out',
        slightrotate: 'slightrotate 1s ease-in-out forwards',
        clickhere: 'clickhere 2s ease-in-out infinite',
        jello: 'jello 2s ease-in-out',
        grow: 'grow 1s ease-in-out forwards',
        swipeLeft: 'swipeLeft 0.3s ease-in-out',
        rotateY: 'rotateY 0.5s ease-in-out forwards'
      },
      fontSize: {
        big: '52px',
        med: '30px',
        sm: '19px',
        mobile: '18px',
      },
      keyframes: {
        slowfade: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        slideup: {
          from: { opacity: 0, transform: 'translateY(25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slidedown: {
          from: { opacity: 0, transform: 'translateY(-25%)' },
          to: { opacity: 1, transform: 'none' },
        },
        slideleft: {
          from: { opacity: 0, transform: 'translateX(-20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideright: {
          from: { opacity: 0, transform: 'translateX(20px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        wave: {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        slightrotate: {
          '0%': { transform: 'rotate(0deg) scale(0.9)' },
          '50%': {transform: 'rotate(2deg) scale(1)'},
          '100%':   { transform: 'rotate(0deg) scale(0.9)' }
        },
        clickhere: {
          '0%': { transform: 'rotate(0deg) scale(.70)' },
          '50%': {transform: 'rotate(5deg) scale(0.8)'},
          '100%':   { transform: 'rotate(0deg) scale(.70)' }
        },
        jello: {
          '11.1%': {
            transform: 'skewX(0deg) skewY(0deg)'
          },
          '22.2%': {
            transform: 'skewX(-12.5deg) skewY(-12.5deg)'
          },
          '33.3%': {
            transform: 'skewX(6.25deg) skewY(6.25deg)'
          },
          '44.4%': {
            transform: 'skewX(-3.125deg) skewY(-3.125deg)'
          },
          '55.5%': {
            transform: 'skewX(1.5625deg) skewY(1.5625deg)'
          },
          '66.6%': {
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)'
          },
          '77.7%': {
            transform: 'skewX(0.390625deg) skewY(0.390625deg)'
          },
          '88.8%': {
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)'
          },
          '100%': {
            transform: 'skewX(0deg) skewY(0deg)'
          }
        },
        grow: {
          '0%': {
            opacity: 0,transform: 'scale(0.1)'
          },
          '100%': {
            opacity: 1,transform: 'scale(1)'
          }
          
        },
        swipeLeft: {
          '0%': {
            opacity: 0,transform: 'translateX(100px)'
          },
          '100%': {
            opacity: 1,transform: 'translateX(0px)'
          }
          
        },
        rotateY: {
          '0%': {
            opacity: 0, transform: 'rotateY(180deg)'
          },
          '100%': {
            opacity: 0, transform: 'rotateY(0deg)'
          }
        }
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require('tailwindcss-animated')
    // ...
  ],
}