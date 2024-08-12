const path = require('path');

module.exports = {
    entry: './src/index.js', // Entry point
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    devServer: {
        static: './dist', // Serve files from the 'dist' directory
        open: true, // Open the browser automatically
        hot: true,
    }
}