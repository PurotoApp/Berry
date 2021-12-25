import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter(),

		target: '#root'
	}
};

export default config;
