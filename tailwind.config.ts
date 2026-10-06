import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#12102A",
          800: "#1E1B4B",
          700: "#312E81",
          600: "#4338CA",
        },
        macaron: {
          pink: "#FFD1DC",
          peach: "#FFDCC5",
          cream: "#FFEFC2",
          mint: "#C9F0DE",
          sky: "#CCE8F7",
          lav: "#DFD4F5",
          matcha: "#E6F2CE",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Microsoft YaHei",
          "PingFang SC",
          "Hiragino Sans GB",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(18,16,42,.04), 0 8px 24px -12px rgba(18,16,42,.12)",
        lift: "0 2px 4px rgba(18,16,42,.05), 0 18px 40px -18px rgba(18,16,42,.25)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%,100%": { transform: "translate3d(0,0,0)" },
          "50%": { transform: "translate3d(0,-14px,0)" },
        },
      },
      animation: {
        rise: "rise .6s cubic-bezier(.22,1,.36,1) both",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
