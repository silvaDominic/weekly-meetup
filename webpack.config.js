const path = require('path');
const nodeExternals = require('webpack-node-externals');
const Dotenv = require('dotenv-webpack');

const serverConfig = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/server/server.ts',
  plugins: [
    new Dotenv(),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.server.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
};

const clientConfig = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/client/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.client.json',
        },
      },
      {
        test: /\.scss|.css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                './src/client/modules/meetup/presentation/styles/variables/index.scss',
                './src/client/modules/meetup/presentation/styles/utils.scss',
              ],
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.css', '.scss'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public/js'),
  },
};

module.exports = [serverConfig, clientConfig];
