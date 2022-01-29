module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte'],
	theme: {
		screens: {
			sm: { max: '639px' },
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1560px'
		},
		fontFamily: {
			sans: 'Inter, sans-serif'
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',

			black: '#000',
			white: '#fff',

			background: '#222027',

			gray: {
				1: '#2A2830',
				2: '#2E2C35',
				3: '#32303A',
				4: '#3A3743',
				5: '#4B4757',
				6: '#585469',
				7: '#6E6986',
				8: '#8A82A4',
				9: '#A59BC2',
				10: '#CFC7E4'
			},

			blue: {
				1: '#292852',
				2: '#3C3B97',
				3: '#5351D2',
				4: '#6D6BED',
				5: '#8F8EF1',
				6: '#A09FEF',
				7: '#C9C9F8'
			},

			red: {
				1: '#E24848',
				2: '#F14646'
			}
		}
	}
};
