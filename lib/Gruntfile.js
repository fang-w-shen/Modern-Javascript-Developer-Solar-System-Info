module.exports = function(grunt){

	grunt.initConfig({
		
		browserify: {
			'../dist/app.js': ['../javascripts/main.js']
		},
		jshint: {
			options: {
				predef: ["document", "console"],
				esnext: true,
				strict: "global",
				globals: {"$": true},
				browserify: true

			},
			files: ['../javascripts/**/*.js']
		},
		sass: {
			dist:{
				files: {
					'../css/main.css': '../sass/styles.scss'
				}
			}
		},
		watch: {
			options: {
				livereload:true,
				open:true
			},
			javascripts: {
				files: ['../javascripts/**/*.js'],
				tasks: ['jshint']
			},
			index: {
				files: ['./index.html']
			},
			sass: {
				files: ['../sass/**/*.scss'],
				tasks: ['sass']
			},
			browserify: {
				files: ['../javascripts/*.js'],
				tasks: ["browserify"]
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	grunt.registerTask('default',  ['jshint', 'sass', 'browserify', 'watch']);

};