/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-white": "#fff",
        black: "#000",
        "gray-gray-700": "#4a5568",
        "gray-gray-600": "#718096",
        gray: {
          "100": "#fafafa",
          "200": "rgba(39, 39, 46, 0)",
          "300": "rgba(255, 255, 255, 0)",
        },
        "brand-primary-bg": "#57007b",
        "gray-gray-800": "#2d3748",
        "gray-gray-900": "#1a202c",
        "shade-primary-lite-bg": "#e8daed",
        "gradient-primary-bg": "#f76680",
        snow: "#fff4f4",
        mintcream: "#f0fff7",
        ghostwhite: "#f1f2ff",
        "gray-gray-300": "#e2e8f0",
        "gray-gray-500": "#a0aec0",
        "gray-gray-400": "#cbd5e0",
        whitesmoke: "#f7f7fa",
        "shade-light-background": "#f9f9ff",
        lavender: "rgba(232, 218, 237, 0.35)",
      },
      spacing: {},
      fontFamily: {
        inspiration: "Inspiration",
        "footer-footer-sm": "Inter",
        "footer-footer-links": "Poppins",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "4xs": "9px",
        "10xs": "3px",
        "11xl": "30px",
        "6xs": "7px",
        mid: "17px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      lg: "18px",
      "16xl": "35px",
      "2xl": "21px",
      "9xl": "28px",
      xl: "20px",
      smi: "13px",
      "3xl": "22px",
      "2xs": "11px",
      xs: "12px",
      "8xl": "27px",
      "17xl": "36px",
      "34xl": "53px",
      "26xl": "45px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
