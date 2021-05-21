module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:5000/api/:path*',
			},
		];
	},
	future: {
		webpack5: true,
	},
	webpack: function (config, options) {
		config.experiments = {};
		return config;
	},
};
