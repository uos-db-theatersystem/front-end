module.exports = {
	async rewrites() {
		return [
			{
				source: '/:path*',
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
