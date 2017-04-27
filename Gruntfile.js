module.exports = function(grunt) {
    var pad = function (number, length) {
        var str = '' + number;
        while (str.length < length) {
            str = '0' + str;
        }
        return str;
    };
    var tasks = ['jshint', 'clean:build', 'babel', 'concat', 'uglify', 'cssmin', 'htmlmin', 'copy', 'imagemin', 'remove', 'string-replace'];
    Date.prototype.YYYYMMDDHHMMSS = function () {
       var yyyy = this.getFullYear().toString();
       var MM = pad(this.getMonth() + 1,2);
       var dd = pad(this.getDate(), 2);
       var hh = pad(this.getHours(), 2);
       var mm = pad(this.getMinutes(), 2);
       var ss = pad(this.getSeconds(), 2);

       return yyyy + MM + dd+  hh + mm + ss;
    };
    var date = new Date().YYYYMMDDHHMMSS();
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['Gruntfile.js', 'src/app/**/*.js', 'src/**/*.jsx'],
            options: {
                jshintrc: '.jshintrc',
            }
        },
        watch: {
            build: {
                files: ['src/**/*.js','src/**/*.css', 'src/**/*.html', 'src/**/*.json', 'src/**/*.jsx'],
                tasks: tasks,
                options: {
                    spawn: false
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    report: 'gzip',
                    cwd: 'build/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'build/assets/css',
                    ext: '.min.css'
                }]
            }
        },
        concat: {
            options: {
                separator: '\n'
            },
            css: {
                src: ['bower_components/uikit/dist/css/uikit.min.css',
                      'bower_components/uikit/dist/css/uikit.gradient.min.css',
                      'src/assets/css/style.css'],
                dest: 'build/assets/css/main.css'
            },
            app:{
                src:['bower_components/jquery-2.1.4.min/index.js',
                     'bower_components/uikit/dist/js/uikit.min.js',
                     'bower_components/react/react.min.js',
                     'bower_components/react/react-dom.min.js',
                     'src/react_components/js/xvelopers.js',
                     'src/assets/js/shared.js'],
                dest:'build/app.js'
            }
        },
        uglify: {
            app:{
                src: 'build/app.js',
                dest: 'build/app.min.js'
            }
        },
        htmlmin: {
            main: {
                options: {
                    removeIgnored: true,
                    removeEmptyAttributes: false,
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'src/index.html'
                }
            },
            views: {
                files: [{
                    expand: true,
                    cwd: 'src/app/views',
                    src: '**/*.html',
                    dest: 'build/app/views'
                }]
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['src/.htaccess'], dest: 'build/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['bower_components/uikit/dist/fonts/*'], dest: 'build/assets/fonts', filter:'isFile'},
                    {expand: true, flatten: true, src: ['src/xvelopers.json'], dest: 'build/', filter:'isFile'}
                ]
            }
        },
        clean:{
            build: {
                src:['build/']
            }
        },
        imagemin: {
            options: {
                optimizationLevel: 5
            },
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif,ico}'],
                    dest: 'build'
                }]
            }
        },
        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 5,
                duration: 3
            }
        },
        remove: {
            clean: {
                trace: true,
                fileList: ['build/app.js', 'build/assets/css/main.css']
            }
        },
        'string-replace':{
          dist:{
            files:[{
              expand:true,
              cwd:'build/',
              src: ['**/*.js','**/*.html'],
              dest:'build/'
            }],
            options: {
              replacements: [{
                pattern: 'XVELOPERSAPP_CURRENT_VERSION',
                replacement: date
              },{
                pattern: 'XVELOPERSAPP_CURRENT_VERSION',
                replacement: date
              }]
            }
          }
        },
        babel: {
          options: {
            plugins: ['transform-react-jsx'],
            presets: ['es2015', 'react']
          },
          jsx: {
            files: [{
              expand: true,
              cwd: 'src/react_components/',
              src: ['*.jsx'],
              dest: 'src/react_components/js/',
              ext: '.js'
            }]
          }
        }
    });
    grunt.loadNpmTasks('grunt-remove');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-jsxhint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-babel');
    grunt.registerTask('build', function () {
        grunt.task.run(tasks);
    });
    grunt.registerTask('default', ['watch']);
};
