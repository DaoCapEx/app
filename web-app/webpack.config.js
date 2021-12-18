const Dotenv = require('dotenv-webpack');

module.exports = {

    plugins: [
        new Dotenv({
            path: process.env.NODE_ENV === "development" ? './dev.env' : './prod.env', // load this now instead of the ones in '.env'
        })
    ]

};