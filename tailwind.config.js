module.exports = {
	darkMode: ['class'],
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#A855F7',
					light: '#F3E8FF',
					dark: '#4C1D95'
				},
				secondary: {
					DEFAULT: '#4C1D95',
					light: '#F3E8FF',
					dark: '#0B0812'
				},
				background: '#0B0812',
				foreground: '#F3E8FF',
				card: {
					DEFAULT: '#161220',
					foreground: '#F3E8FF'
				},
				popover: {
					DEFAULT: '#161220',
					foreground: '#F3E8FF'
				},
				muted: {
					DEFAULT: '#161220',
					foreground: '#94A3B8'
				},
				accent: {
					DEFAULT: '#A855F7',
					foreground: '#F3E8FF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: '#4C1D95',
				input: '#161220',
				ring: '#A855F7'
			},
			fontFamily: {
				lexend: [
					'Lexend',
					'sans-serif'
				],
				mono: [
					'JetBrains Mono',
					'monospace'
				],
				base: ['var(--font-sans)'],
			},
			borderRadius: {
				lg: '0.5rem',
				md: '0.375rem',
				sm: '0.25rem',
				base: "0.25rem",
			},
			borderWidth: {
				DEFAULT: '1px',
				'0': '0',
				'2': '2px',
				'4': '4px',
				'8': '8px',
			},
			boxShadow: {
				shadow: "4px 4px 0px 0px #4C1D95",
				neo: "5px 5px 0px 0px #4C1D95",
				"neo-hover": "10px 10px 0px 0px #4C1D95",
			},
			backgroundImage: {
				'scanlines': 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2))',
			},
			backgroundSize: {
				'scanlines': '100% 4px',
			},
			translate: {
				boxShadowX: "4px",
				boxShadowY: "4px",
				reverseBoxShadowX: "-4px",
				reverseBoxShadowY: "-4px",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
};
