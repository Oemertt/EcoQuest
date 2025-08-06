/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['BeVietnamPro-Regular', 'sans-serif'],
        'vietnam': ['BeVietnamPro-Regular', 'sans-serif'],
        'thin': ['BeVietnamPro-Thin'],
        'light': ['BeVietnamPro-Light'],
        'regular': ['BeVietnamPro-Regular'],
        'medium': ['BeVietnamPro-Medium'],
        'semibold': ['BeVietnamPro-SemiBold'],
        'bold': ['BeVietnamPro-Bold'],
        'extrabold': ['BeVietnamPro-ExtraBold'],
        'black': ['BeVietnamPro-Black'],
      },
    },
  },
  plugins: [],
};