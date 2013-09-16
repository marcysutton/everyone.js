'use strict';

module.exports = function(grunt) {
	
	var path = require('path');
	var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
	var folderMount = function folderMount(connect, point) {
	  return connect.static(path.resolve(point));
	};

	var OUTPUT_PATH = '../public/';
	
	var LIVERELOAD_PORT = 35729;
	
	var PORT_NUMBER = 3334;
	
	var globalConfig = {
	    src: '',
	    temp: '.tmp/',
	    dist: '../public/',
	    scripts: OUTPUT_PATH + '/_ui/js/',
	    views: OUTPUT_PATH
	}
	
	// Project configuration.
	grunt.initConfig({
	
		globalConfig: globalConfig,
		
		coffee: {
			options: {
				bare: true
			},
			compile: {
				expand: 'yes',
				cwd: 'coffeescript/',
				src: ['**'],
				dest: '<%= globalConfig.scripts %>',
				ext: '.js',
				filter: 'isFile'
			},
		},
		open: {
			server: {
				path: 'http://localhost:<%= connect.options.port %>'
			}
		},
		clean: {
			all: ['<%= globalConfig.temp %>', '<%= globalConfig.dist%>']
		},
		connect: {
			options: {
				port: PORT_NUMBER,
				base: '<%= globalConfig.dist %>',
				hostname: 'localhost'
			},
			livereload: {
				options: {
					middleware: function(connect, options) {
						return [lrSnippet, folderMount(connect, OUTPUT_PATH)]
					}
				}
			}
		},
		watch: {
			coffee: {
				files: ['coffeescript/*.coffee'],
				tasks: 'coffee'
			},
			livereload: {
				options: {
					livereload: LIVERELOAD_PORT
				},
				files: [
		          '<%= globalConfig.scripts %>**/*.js',
		          '<%= globalConfig.views %>**/*.html'
		        ]
		    }
		}
	});
	
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.loadNpmTasks('grunt-contrib-connect');
	
	grunt.registerTask('server', function(target){
		grunt.task.run(['coffee', 'connect:livereload', 'watch']);
	})
	
	grunt.registerTask('default', ['coffee']);

};
