/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'title': ['Roboto', 'sans-serif']

    },
    extend: {
      backgroundImage: {
        'stats': 'url(/stats.jpg)'
      },
      screens: {
      'xs': '400px'
      },
      keyframes: {
        width: {
          '0%, 100%': { width: 0 },
          '100%': { width: '48px' }
        },

        bouncing: {
          '0%, 100%': {
            'transform': 'translate(-50%, -5%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            'transform': 'translate(-50%, 0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)'
          }
        },
        loader: {
          "to": {
            "opacity": "0.1",
            "transform": "translate3d(0,-1rem,0)"
          }
        },
        fadeOut: {
          "to": {
            "opacity": "0"
          }
        }
      },
      animation: {
        "width": 'width 2s linear alternate infinite',
        'bounce-slow': 'bouncing 3s alternate infinite',
        "loader": "loader 0.6s infinite alternate",
        "fadeOff": "fadeOut 700s finite"
      }
    },
    
  },
  plugins: [],
}
