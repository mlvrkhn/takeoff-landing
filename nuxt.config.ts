// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	runtimeConfig: {
		public: {
			apiKey: process.env.API_KEY,
			apiUrl: process.env.API_URL,
		},
	},
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss'],
});
