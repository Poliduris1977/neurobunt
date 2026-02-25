/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    // Cyan
    'text-neon-cyan', 'border-neon-cyan', 'bg-neon-cyan/5', 'bg-neon-cyan/10', 'bg-neon-cyan/20',
    'border-neon-cyan/20', 'border-neon-cyan/30', 'border-neon-cyan/40', 'border-neon-cyan/50',
    // Red (brand action color — must be safelisted since used via static strings)
    'text-red-400', 'text-red-500', 'text-red-600',
    'bg-red-600', 'bg-red-500', 'bg-red-950',
    'border-red-500', 'border-red-600',
    'bg-red-600/5', 'bg-red-600/10', 'bg-red-600/20', 'bg-red-950/20',
    'border-red-600/20', 'border-red-600/30', 'border-red-600/40', 'border-red-500/40',
    'hover:border-red-500/40', 'hover:text-red-400', 'hover:border-red-500',
    'shadow-red-600/30', 'shadow-red-900/20',
    // Purple (services)
    'text-neon-purple', 'border-neon-purple', 'bg-neon-purple/5', 'bg-neon-purple/10',
    'border-neon-purple/20', 'border-neon-purple/30',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        neon: {
          cyan: "hsl(180 100% 50%)",
          pink: "hsl(320 100% 55%)",
          purple: "hsl(280 100% 60%)",
          green: "hsl(140 100% 55%)",
        },
        'dark-bg': "hsl(var(--dark-bg))",
        'dark-card': "hsl(var(--dark-card))",
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow-red': 'pulse-glow-red 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
