module.exports = {
	preset: "@shelf/jest-mongodb",
	jest: {
		transform: {
			"^.+\\.js$": "babel-jest",
			".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$":
				"jest-transform-stub",
		},
	},
};
