module.exports = {
	mode: 'jit',
	content: ['./src/**/*.svelte'],
	theme: {
		screens: {
			sm: { max: '639px' },
			mb: { max: '768px' },
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

			gold: {
				1: '#524932',
				2: '#715F33',
				3: '#867341',
				4: '#A78B44',
				5: '#DBBE76',
				6: '#EED8A1',
				7: '#F0E6CB'
			},

			mint: {
				1: '#3C5245',
				2: '#506E5C',
				3: '#72A889',
				4: '#80BF9A',
				5: '#93DBB1',
				6: '#BBFFD7',
				7: '#D6FFE7'
			},

			rosetta: {
				1: '#7B3744',
				2: '#B94157',
				3: '#E0526C',
				4: '#EE7289',
				5: '#F18EA0',
				6: '#F5ADBA',
				7: '#EBC6CD'
			},

			scarlet: {
				1: '#5B2929',
				2: '#922020',
				3: '#F14646',
				4: '#FF6161',
				5: '#FF8080',
				6: '#FFA8A8',
				7: '#FFD1D1'
			},

			safety: {
				blue: '#308EFC',
				green: '#4BC02E',
				yellow: '#FFA53C',
				red: '#E24848'
			}
		}
	}
};
