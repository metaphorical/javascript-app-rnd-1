path = require('path');
webpack = require('webpack');

module.exports = {
    context: __dirname + "/",
    //Since key is used as a name of a file, I use it to add multiple output points by joining path and
    //concatinating with name that includes new path (pushing it all to public/js, but sorting into static and app folders
    entry: {
        "static/falcor1": "./app/client/bundle/static/falcor1.js",
        "static/react1": "./app/client/bundle/static/react1.js",
        "static/react2": "./app/client/bundle/static/react2.js",

        "app/home": "./app/client/bundle/app/home.js"
    },
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            //Babel loader with added react preset, react 0.14+ and babel 6+ wont work together w/o this
            {
                test:/\.js?$/,
                loader: "babel",
                query: {
                    presets:['react']
                }
            },
            //To be able ot use .jsx files for separating HTML from js in component we need jsx loader
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            // This is way to set or create global variables...
            // Will use it to check if React is rendered on server or on client side (in webpack or node)
            // APP_ENV does not need to be in process.env
            // NODE_ENV needs to be set to production in prod since lots of stuff, including React use it to optimize prod
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                APP_ENV: JSON.stringify('browser')
            }
        })
    ]
};