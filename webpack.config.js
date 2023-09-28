const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //NEWNOTE: interesting. so the entry property can also be an object.
    // i assume the property (of the entry object) is the file name that webpack will use to bundle
    // and the value is obviously the path
    entry: {
        index: "./src/js/index.js",
        print: "./src/js/print.js",
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Output Management Deez Nuts",
            template: "./src/index.html",
            filename: "index.html", //NOTE: not needed because it generates index.html by default, but good to know in case you need a different name
        }),
    ],
    output: {
        //NOTE: i think [name] here will work because we made entry an object with specific properties
        //NOTE: so i think [name] will equate to index or print (the properties in the entry object).
        //NOTE: i'm not sure yet. voyons bien
        filename: "js/[name].bundle.js", //NEW: changing this so all the generated javascript files are in a js folder instead
        path: path.resolve(__dirname, "dist"),
        clean: true, //NEW: ce code ceci nettoyera le dossier "dist" avant chaque build. TESTING: ça marche. PASS
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
