module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1560px'
		},
		fontFamily: {
			sans: 'Inter, "Public Sans", Helvetica, Ubuntu, Arial, sans-serif'
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

			purple: '#6D6BED',

			red: {
				1: '#E24848',
				2: '#F14646'
			}
		}
	}
};
