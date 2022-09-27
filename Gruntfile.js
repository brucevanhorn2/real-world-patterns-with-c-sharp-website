grunt.loadNpmTasks('grunt-critical');
critical: {
    test: {
        options: {
            base: './',
            css: [
                'test/fixture/styles/main.css',
                'test/fixture/styles/bootstrap.css'
            ],
            width: 320,
            height: 70
        },
        src: 'test/fixture/index.html',
        dest: 'test/generated/critical.css'
    }
}