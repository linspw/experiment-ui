const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const alias = {
  "@": path.resolve(__dirname, "src"),
  "@components": path.resolve(__dirname, "src", "components"),
  "@styles": path.resolve(__dirname, "src", "styles"),
  "@utils": path.resolve(__dirname, "src", "utils"),
  "@plugins": path.resolve(__dirname, "src", "plugins"),
  "@assets": path.resolve(__dirname, "src", "assets"),
};

module.exports = (_env, _argv) => {
  const plugins = [];
  const rules = [];

  plugins.push(new VueLoaderPlugin());
  rules.push({
    test: /\.vue$/,
    loader: "vue-loader",
  });
  rules.push({
    test: /\.?js$/,
    exclude: /node_modules/,
    use: ["babel-loader"],
  });
  rules.push({
    test: /\.(css|scss|sass)$/i,
    use: [
      "vue-style-loader",
      "css-loader",
      "sass-loader",
    ],
  });
  rules.push({
    test: /\.(png|jp(e*)g|svg|gif)$/,
    use: ["file-loader"],
  });
  rules.push({
    test: /\.(png|jp(e*)g|svg|gif)$/,
    use: ["file-loader"],
  });
  rules.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return {
    stats: "errors-only",
    entry: path.join(__dirname, "src", "main.js"),
    output: {
      library: {
        type: "umd",
        name: "CoreUI",
      },
      filename: "[name].js",
      sourceMapFilename: "[name].[hash:8].map",
      chunkFilename: "[id].[hash:8].js",
      publicPath: "/",
      path: path.resolve(__dirname, "dist", "lib"),
      clean: true,
    },
    module: {
      exprContextCritical: false,
      rules,
    },
    resolve: {
      alias,
      extensions: [".js", ".vue"],
    },
    plugins,
  };
};
