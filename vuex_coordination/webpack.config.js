const tsLoaderConfig = {
  loader: 'ts-loader',
  options: {
    appendTsSuffixTo: [/\.vue$/]
  }
}

module.exports = {
  mode: 'production', // or development
  entry: {
    app: './frontend/src/app/index.ts'
  },
  output: {
    path: `${__dirname}/app/static`,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules|vue\/src/,
        use: [
          tsLoaderConfig,
          {
            loader: 'tslint-loader',
            options: {
              typeCheck: true,
              configFile: 'tslint.json'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vueファイルの中で ts を書けるようにする
          loaders: {
            ts: tsLoaderConfig
          },
          options: {
            esModule: true
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['.ts', '.js', '.vue', '.json']
  }
}
