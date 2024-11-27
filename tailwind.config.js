/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        fadeSlideDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeSlideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0)',
          },
          '50%': { 
            transform: 'translateY(-20px)'
          }
        },
        gradientText: {
          '0%': { 
            backgroundPosition: '0% 50%'
          },
          '50%': { 
            backgroundPosition: '100% 50%'
          },
          '100%': { 
            backgroundPosition: '0% 50%'
          }
        },
        highlight: {
          '0%': { 
            backgroundColor: 'rgba(249, 115, 22, 0)',
          },
          '50%': { 
            backgroundColor: 'rgba(249, 115, 22, 0.1)',
          },
          '100%': { 
            backgroundColor: 'rgba(249, 115, 22, 0)',
          }
        }
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        pulse: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        fadeSlideDown: 'fadeSlideDown 0.6s ease-out',
        fadeSlideUp: 'fadeSlideUp 0.6s ease-out',
        float: 'float 8s ease-in-out infinite',
        gradientText: 'gradientText 6s ease infinite',
        highlight: 'highlight 2s ease-in-out infinite'
      },
      boxShadow: {
        glow: '0 0 15px rgba(249, 115, 22, 0.5)',
        subtle: '0 0 10px rgba(0, 0, 0, 0.3)'
      }
    }
  },
  plugins: [],
}

