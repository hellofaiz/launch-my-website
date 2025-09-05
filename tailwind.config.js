/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Professional blue - trustworthy and modern
          dark: '#1D4ED8', // Darker blue for hover states
          light: '#3B82F6', // Lighter blue for accents
        },
        secondary: {
          DEFAULT: '#6B7280', // Professional gray - clean and sophisticated
          light: '#9CA3AF', // Light gray for muted text
          lighter: '#D1D5DB', // Very light gray for borders
        },
        accent: {
          DEFAULT: '#10B981', // Professional green - success and growth
          light: '#34D399', // Lighter green for hover states
          dark: '#059669', // Darker green for contrast
        },
        success: {
          DEFAULT: '#10B981', // Professional green for success states
          light: '#34D399',
        },
        background: {
          dark: '#F9FAFB', // Very light gray for subtle contrast
          DEFAULT: '#FFFFFF', // Pure white main background
          light: '#F3F4F6', // Light gray for cards and sections
        },
        highlight: {
          DEFAULT: '#8B5CF6', // Professional purple - creativity and innovation
          light: '#A78BFA',
        }
      },
      backgroundSize: {
        '300%': '300%',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'text-shimmer': 'text-shimmer 2.5s ease-out infinite alternate',
        'border-width': 'border-width 3s infinite alternate',
        'scale-up': 'scale-up 0.5s ease-out',
        'cursor-pulse': 'cursor-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'text-shimmer': {
          '0%': {
            'background-position': '0 0'
          },
          '100%': {
            'background-position': '-200% 0'
          }
        },
        'border-width': {
          'from': {
            'width': '10px',
            'opacity': '0'
          },
          'to': {
            'width': '100px',
            'opacity': '1'
          }
        },
        'scale-up': {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0'
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        'cursor-pulse': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(0.9)'
          }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 