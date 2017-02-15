module.exports = {
    staticFileGlobs: [
        '/',
        '/?homescreen=1',
        'index.html/?homescreen=1',
        'index.html',
        'images/logo.png',        
    ],

    runtimeCaching: [{
        urlPattern: /jsonplaceholder\.typicode\.com\/users/,
        handler: 'cacheFirst'
    }]
}