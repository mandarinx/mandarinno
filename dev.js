var nodemon = require('nodemon');

nodemon({
    script: 'app.js',
    ext: 'js json',
    watch: [
        'public/**/*.*',
        'views/**/*.*',
        'app.js',
        'config.js',
        'prismic-configuration.js'
    ],
});

nodemon.on('start', function () {
    console.log('[nodemon] Server has started');
}).on('quit', function () {
    console.log('[nodemon] Server has quit');
}).on('restart', function (files) {
    console.log('[nodemon] Server restarted due to: ', files);
});
