const path = require('path');
const Html = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCss = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const Terser = require('terser-webpack-plugin');


const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimizaition = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new OptimizeCss(),
            new Terser()
        ]
    }

    return config;
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        "main": './index',
        "analytics": './analytics'
    },
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.css', '.less']
    },
    optimization: optimizaition(),
    plugins: [
        new Html({
            template: './index.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCss({
            filename: '[name][contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCss.loader, 'css-loader']
            },
            {
                test: /\.less$/,
                use: [MiniCss.loader, 'css-loader', 'less-loader']
            } 
        ]
    }
}