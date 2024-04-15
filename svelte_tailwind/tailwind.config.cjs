/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// Colours from Flexoki - https://stephango.com/flexoki
			colors: {
				gray: {
					1: '#f6f7fa',
					2: '#D6D6D6',
					3: '#A1A1A4',
					4: '#818183',
					5: '#6E6E6E',
					6: '#222222'
				},
				navy: {
					royal: '#003778',
					deep: '#002857',
					dark: '#00183C'
				},
				azure: {
					base: '#0094FF',
					deep: '#0077CC',
					dark: '#00548F'
				},
				purple: {
					royal: '#5B1DE7',
					deep: '#3D14A3',
					dark: '#11156D'
				}
			},
			fontFamily: {
				archivo: ['"Archivo"', 'sans']
			}
		}
	},

	plugins: []
};

module.exports = config;
