module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://localhost:5000/:path*',
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
