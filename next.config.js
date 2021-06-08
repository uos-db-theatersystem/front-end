module.exports = {
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://13.209.21.103:5000/api/:path*',
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
// 13.209.21.103:5000
