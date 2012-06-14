module.exports = function(grunt) {

	grunt.initConfig({

		pkg: '<json:package.json>',

		staging: 'intermediate/',

		output: 'publish/',

		exclude: '.git* build/** node_modules/** grunt.js package.json *.md'.split(' '),

		mkdirs: {
			staging: '<config:exclude>'
		},

		concat: {
			dist: {
				src: ['js/plugins.js', 'js/main.js'],
				dest: 'js/CFSG-0.1.0.js'
			}
		},

		css: {
			'css/style.css': ['css/**/*.css']
		},

		rev: {
			js: 'js/**/*.js',
			css: 'css/**/*.css',
			img: 'img/**'
		},

		usemin: {
			css: ['**/*.css'],
			html: ['**/*.html'],
			files: ['**/*.html']
		},

		html: '<config:usemin>',

		img: {
			dist: '<config:rev.img>'
		},

		watch: {
			files: '<config:lint.files>',
			tasks: 'lint qunit'
		},

		meta: {
			version: '0.1.0',
			banner:
				'/*! <%= meta.name %> - v<%= pkg.version %> - <%= grunt.template.today("m/d/yyyy") %>\n' +
				'* <%= pkg.homepage %>\n' +
				'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
				' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
		},

		lint: {
			files: ['grunt.js', 'js/**/*.js', 'test/**/*.js']
		},

		qunit: {
			files: ['test/**/*.html']
		},

		min: {
			dist: {
				src: 'js/CFSG-0.1.0.js',
				dest: 'js/main.js'
			}
		}

	});

	grunt.registerTask('default', 'intro clean qunit mkdirs concat css min rev usemin manifest html img copy');

};
