const { describeCases } = require("./TestCases.template");

describe("TestCases", () => {
	describeCases({
		name: "minimized-source-map",
		mode: "production",
		devtool: "eval-cheap-module-source-map",
		minimize: true,
		deprecations: [
			// TODO update terser-webpack-plugin to use getCache()
			expect.objectContaining({ code: "DEP_WEBPACK_COMPILATION_CACHE" })
		]
	});
});
