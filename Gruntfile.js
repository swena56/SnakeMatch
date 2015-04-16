module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: ';'
			},
			scripts: {
				src: [
					'client/js/index.js',
					'common/*.js',
					'client/js/lib/*.js',
					'common/game-objects/board.js',
					'common/game-objects/pellet.js',
					'common/game-objects/snake-part.js',
					'common/game-objects/snake-head.js',
					'common/game-objects/snake.js',
					'client/js/*.js'
				],
				dest: 'client/deploy/all.js'
			},
			index: {
				src: [
					'client/index.html'
				],
				dest: 'client/deploy/index.html'
			}
		},
		watch: {
			scripts: {
				files: ['client/**/*.*', '!client/deploy/**/*.*', 'common/*.js'],
				tasks: ['client'],
				options: {
					debounceDelay: 5000
				}
			}
		},
		jshint: {
			options: {
				jshintrc: true,
				ignores: [
					'node_modules/**',
					'client/deploy/**/*.*',
					'**/*.min.js'
				]
			},
			files: ['**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'concat']);
	grunt.registerTask('client', ['concat']);
};
