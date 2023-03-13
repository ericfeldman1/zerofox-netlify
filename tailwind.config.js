/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.js",
  ],
  theme: {
    colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'dark-red': '#a51e23',
			'fox-red': '#e7282b',
			'cyber-blue': '#24e4eb',
			'threat-orange': '#ff8022',
			black: '#131e29',
			'fox-blue': '#002539',
			blue: '#1d3c4c',
			'faded-cyber': '#0F7785',
			'dark-slate': '#5a6f76',
			'med-slate': '#7d9096',
			'light-slate': '#b6c6cb',
			'faded-slate': '#E9EEEF',
			gray: '#e0e0e0',
			'light-gray': '#f7f7f7',
			white: '#ffffff'
		},
    fontSize: {
			xs: ['0.75rem', { lineHeight: 'normal' }], // 12/17
			sm: ['0.875rem', { lineHeight: '1.428' }], // 14/20
			md: ['0.9375rem', { lineHeight: '1' }], // 15/15
			base: ['1rem', { lineHeight: '1.5625' }], // 16/25
			lg: ['1.125rem', { lineHeight: '1.35' }], // 18/20
			xl: ['1.25rem', { lineHeight: '1.35' }], // 20/27
			'2xl': ['1.3125rem', { lineHeight: '1.095' }], // 21/23
			'3xl': ['1.375rem', { lineHeight: '1.09' }], // 22/24
			'4xl': ['1.5rem', { lineHeight: '1.25' }], // 24/30
			'5xl': ['1.6875rem', { lineHeight: '1.074' }], // 27/29
			'6xl': ['1.875rem', { lineHeight: '1.133' }], // 30/34
			'7xl': ['2.1875rem', { lineHeight: '1.057' }], // 35/37
			'8xl': ['2.5rem', { lineHeight: '1.05' }], // 40/42
			'9xl': ['2.6875rem', { lineHeight: '1.046' }], // 43/45
			'10xl': ['2.8125rem', { lineHeight: '1.133' }], // 45/51
			'11xl': ['3.25rem', { lineHeight: '1.038' }], // 52/54
			'12xl': ['3.4375rem', { lineHeight: '1.036' }], // 55/57
			'13xl': ['3.625rem', { lineHeight: '1.2' }], // 58/60 *1.2 for tablet fix
			'14xl': ['3.75rem', { lineHeight: '1.05' }], // 60/63
			'15xl': ['4.0625rem', { lineHeight: '1.046' }], // 65/68
			'16xl': ['4.6875rem', { lineHeight: '1.04' }], // 75/78
			'17xl': ['5.313rem', { lineHeight: '1' }], // 85/85
			'quote-lg': ['14rem', { lineHeight: '1' }], // 224/224
			'quote-md': ['12.5rem', { lineHeight: '1' }], // 200/200
			'quote-sm': ['11.25rem', { lineHeight: '1' }] // 180/180
		},
		fontWeight: {
			light: '300',
			normal: '400',
			semibold: '600',
			bold: '700',
			extrabold: '800'
		},
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1640px',
			'3xl': '1768px',
			short: { raw: '(min-height: 768px)' },
			tall: { raw: '(min-height: 1024px)' }
		},
    extend: {
      fontFamily: {
        heading: ["Aboreto", "cursive"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
