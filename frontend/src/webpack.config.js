const path = require('path');

module.exports = {
    resolve: {
        fallback: {
            assert: require.resolve('assert/'),
            stream: require.resolve('stream-browserify'),
            util: require.resolve('util/'),
            crypto: require.resolve('crypto-browserify'),
            url: require.resolve('url/'),
            querystring: require.resolve('querystring-es3'),
            path: require.resolve('path-browserify'),
            os: require.resolve('os-browserify/browser'),
            https: require.resolve('https-browserify'),
            buffer: require.resolve('buffer/')
        }
    }
};