const path = require('path');

// here we use the plugins to clear folders and copy folder content
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        // This is our entry point, the main JavaScript file
        app: './src/main.js',
    },
    output: {
        // This is our output file, 
        // the one which bundles all libraries
        filename: 'main.js',

        // And this is the path of the output bundle,
        // "dist" folder
        path: path.resolve(__dirname, 'dist'),
    },

    // We are in production mode
    mode: 'production',
    plugins: [
        // Here we clean the destination folder
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),

        // Here we copy some files to destination folder.
        // Which files?
        new CopyPlugin({
            patterns: [
                {
                    // src/index.html
                    from: 'index.html',
                    context: 'src/'
                },
                {
                    // every file inside src/assets folder
                    from: 'assets/*',
                    context: 'src/'
                }
            ]
        })
    ]
}