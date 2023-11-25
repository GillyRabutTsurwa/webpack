const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/js/index.js",
        print: "./src/js/print.js",
    },
    devtool: "inline-source-map",
    plugins: [
        new HTMLWebpackPlugin({
            title: "Development",
            template: "./src/index.html",
            filename: "index.html", //NOTE: not needed because it generates index.html by default, but good to know in case you need a different name
        }),
    ],
    output: {
        filename: "js/[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            //NOTE: loading css stylesheets
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            //NOTE: loading image files
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    publicPath: "img/",
                    outputPath: "img/",
                },
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
                generator: {
                    publicPath: "fonts/",
                    outputPath: "fonts/",
                },
            },
        ],
    },
};
