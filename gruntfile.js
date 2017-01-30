(function(){
  'use strict';

  module.exports = function( grunt ){
    require('time-grunt')(grunt);
    var serveStatic = require('serve-static');
    // Automatically load required Grunt tass
    require('jit-grunt')(grunt, {
      ngtemplates: 'grunt-angular-templates',
      serveStatic : 'serve-static'
    });

    grunt.initConfig({
      watch: {
        js: {
          files : ['app/{components,modules}/**/*.js'],
          tasks : ['jshint:scripts','newer:injector:js']
        },
        jade: {
          files : ['app/{components,modules}/**/*.jade'],
          tasks : ['jade'],
        },
        sass: {
          files : ['app/assets/styles/*.sass', 'app/{components,modules}/**/*.sass'],
          tasks : ['injector:sass','sass']
        },
        css: {
          files: ['.tmp/assets/styles/*.css'],
          tasks: ['postcss']
        },
        jsTest : {
          files: ['app/{components,modules}/**/*.spec.js'],
          tasks: ['jshint:test']
        },
        livereload: {
          options: {
            livereload:true,
          },
          files: [
            'app/index.html',
            'app/app.js',
            'app/app.config.js',
            'app/{components,modules}/**/*.js',
            '.tmp/{components,modules}/**/*.html',
            '.tmp/assets/styles/app.css'
          ]
        }
      },
      connect: {
        server: {
          options: {
            port : 9014,
            livereload: true,
            open: true,
            middleware : function(connect){
              return [
                connect().use(
                  '/bower_components',
                  serveStatic('./bower_components')
                ),
                serveStatic('.tmp'),
                serveStatic('app')
              ];
            }
          }
        }
      },
      wiredep: {
        server: {
          src: [
            'app/index.html'
          ]
        }
      },
      injector: {
        js: {
          options: {
            transform: function(filePath){
              filePath = filePath.replace('/app/', '');
              return '<script src="'+filePath+'" ></script>';
            },
            starttag: '<!-- inject-scripts -->',
            endtag: '<!-- end inject-scripts -->'
          },
          files: {
            'app/index.html' : [
              'app/{components,modules}/**/*.js',
              '!app/{components,modules}/**/*.spec.js'
            ]
          }
        },
        sass: {
          options: {
            transform: function(filePath){
              filePath = filePath.replace('/app', '../..');
              return '@import "'+filePath+'"';
            },
            starttag: '// inject-sass',
            endtag: '// end inject-sass'
          },
          files: {
            'app/assets/styles/main.sass' : [
              'app/{components,modules}/**/*.sass'
            ]
          }
        }
      },
      jade: {
        compile: {
          options: {
            data: {
              debug: true
            }
          },
          files: [{
            expand: true,
            cwd: 'app',
            src: [
              '{components,modules}/**/*.jade'
            ],
            dest: '.tmp',
            ext: '.html'
          }]
        }
      },
      sass: {
        server: {
          files : {
            '.tmp/assets/styles/app.css': 'app/assets/styles/main.sass'
          }
        }
      },
      postcss: {
        options: {
          preprocessor: [
            require('autoprefixer')({browsers: 'last 2 versions'})
          ]
        },
        server: {
          src: '.tmp/assets/styles/*.css'
        }
      },
      jshint:{
        options: {
          reporter: require('jshint-stylish')
        },
        scripts: {
          src: [
            'gruntfile.js',
            'app/*.js',
            'app/{components,modules}/**/*.js',
            '!app/{components,modules}/**/*.spec.js',
          ]
        },
        test: {
          src:[
            'app/{components,modules}/**/*.spec.js'
          ]
        }
      },
      jscs:{
        options:{
          config: '.jscsrc',
          main: [
            'app/app.js',
            'app/app.config.js',
            'app/app/{components,modules}/**/*.js'
          ]
        }
      },
      karma: {
        unit: {
          configFile : 'karma.conf.js',
          port: 9013,
          singleRun: true
        }
      }
    });

    grunt.registerTask('serve', 'Compile then Start server', function (target) {
      grunt.task.run([
        'wiredep',
        'injector:sass',
        'jshint:scripts',
        'injector:js',
        'jade',
        'sass',
        'postcss',
        'connect:server',
        'watch'
      ]);
    });

    grunt.registerTask('test', function(){
      grunt.task.run([
        'jshint:test',
        'karma:unit'
      ]);
    });
  };
})();
