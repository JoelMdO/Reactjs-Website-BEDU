const path = require('path');

module.exports = {
    entry: './src/index.js', // your entry file
    output: {
        filename: 'bundle.js', // your output file
        path: path.resolve(__dirname, 'dist'), // your output directory
    },
    module: {
        rules: [
            {
                test: /\.js$/, // apply the following rules to JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // use Babel to transpile your JavaScript
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            // add other rules for different file types, such as SVG
        ],
    },
};
