module.exports = function (config) {
    config.set({
        basePath: '',
        files: [
            'static/lib.js',
            'node_modules/angular-mocks/angular-mocks.js',

            'static/polls.js',
            'test/*.js',
        ],

        frameworks: ['jasmine'],

        reporters: ['progress', 'mocha'],
        mochaReporter: {
            output: 'full'
        },

        colors: true,

        browsers: ['PhantomJS'],

        singleRun: false,
        autoWatch: true
    });
};
