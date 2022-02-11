const rules = [];

if (process.env.npm_lifecycle_event.search('storybook') < 0) {
  rules.push({
    test: /\.vue$/,
    loader: 'vue-loader',
  });
}

rules.push({
  test: /\.?js$/,
  exclude: /node_modules/,
  use: ['babel-loader'],
});

rules.push({
  test: /\.(css|scss|sass)$/i,
  use: [
    'vue-style-loader',
    'css-loader',
    'sass-loader',
  ],
});

rules.push({
  test: /\.(png|jp(e*)g|svg|gif)$/,
  use: ['file-loader'],
});

exports.rules = rules;
