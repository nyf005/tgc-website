import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8ccbff",
          400: "#54adff",
          500: "#2b8eff",
          600: "#1a70f7",
          700: "#1359e3",
          800: "#1647b8",
          900: "#183f8f",
        },
        secondary: {
          50: "#fef9ec",
          100: "#fbefc9",
          200: "#f7dd8c",
          300: "#f3c54f",
          400: "#f0ad25",
          500: "#e69012",
          600: "#cb6d0d",
          700: "#a74e11",
          800: "#883d15",
          900: "#713316",
        },
        accent: {
          50: "#ecfcf4",
          100: "#d0f7e3",
          200: "#a4eeca",
          300: "#6ddead",
          400: "#3cc88e",
          500: "#1ea972",
          600: "#158759",
          700: "#146c49",
          800: "#13553c",
          900: "#124734",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      fontSize: {
        "display-2xl": [
          "3.75rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-lg": [
          "2.5rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em" },
        ],
        "display-md": ["2rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-sm": [
          "1.5rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
