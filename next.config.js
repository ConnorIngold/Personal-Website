/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'dummyimage.com',
				port: '',
			},
		],
		domains: ['images.ctfassets.net'],
	},
	tailwind: {
		mode: 'jit',
		// These paths are just examples, customize them according to your project structure
		// For more information: https://tailwindcss.com/docs/just-in-time-mode#basic-usage
		config: './tailwind.config.js',
		safelist: ['bg-Vue', 'bg-React'], // Add any classes that should not be purged here
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
}

module.exports = nextConfig
