const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
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
                //NOTE: grâce à çe code la-dessous, l'image généré par webpack sera mise dans la dossier, qui fait plus propre et organisé le dossier dist
                generator: {
                    publicPath: "img/",
                    outputPath: "img/",
                },
            },
        ],
    },
};
