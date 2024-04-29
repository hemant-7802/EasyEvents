const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'iPhone4and4S': { 'min': '320px', 'max': '480px' },

        'iPhone5and5Sand5Cand5SE': { 'min': '320px', 'max': '568px' },

        'iPhone6and6Sand7and8': { 'min': '375px', 'max': '667px' },

        'iPhone6+and7+and8+': { 'min': '414px', 'max': '736px' },

        'iPhoneX': { 'min': '375px', 'max': '812px' },

        'GalaxyS4andS5andNote 3': { 'min': '320px', 'max': '640px' },

        'GalaxyS6': { 'min': '360px', 'max': '640px' },

        'Laptops': { 'min': '1200px', 'max': '1600px' },

        'Desktop': { 'min': '1025px', 'max': '1280px' },

        'FullHDand2K': { 'min': '1920px', 'max': '2560px' },

        'iPad1and2andMiniandAir': { 'min': '768px', 'max': '1024px' },

        'iPadPro10.5': { 'min': '834px', 'max': '1112px' },

        'iPadPro12.9': { 'min': '1024px', 'max': '1366px' },

        'GalaxyTab2': { 'min': '800px', 'max': '1280px' },
      },
    },
  },
  plugins: [nextui(),
  ],
};
