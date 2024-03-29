var gulp = require('gulp');
var browserify = require('gulp-browserify');
var stylus = require('gulp-stylus');
var qunit = require('gulp-qunit');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var through = require('through2');

var paths = {
  css: './src/css/**/*',
  stylus: ['./src/stylus/styles.styl', './src/stylus/overrides.styl', './src/stylus/visual-identity-overrides.styl'],
  js: './src/js/*.js',
  tests: './tests/*.html',
  jsTests: './src/js/tests/**/*',
  imgs: './src/**/*.?(png|jpg|gif)'
}

gulp.task('default', ['js', 'css', 'imgs', 'modules'], function() {
  return;
})

gulp.task('watch', ['default'], function() {
  gulp.watch(['./src/stylus/**/*.styl', './src/stylus/**/*_.styl'], ['css']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.imgs, ['imgs']);
});

gulp.task('css', ['stylus'], function() {
  return gulp.src(paths.css)
        .pipe(gulp.dest('./build/css'))
})

gulp.task('stylus', function() {
  return gulp.src(paths.stylus)
        .pipe(stylus({compress: true}))
        .pipe(gulp.dest('./src/css'))
})

gulp.task('js', function() {
  return gulp.src(paths.js, {read: true})
        .pipe(concat('app.js'))
        //.pipe(uglify()) // uncomment do compression, this is commented for debugging
        .pipe(gulp.dest('./build/js'))
})

gulp.task('imgs', function() {
  return gulp.src(paths.imgs, {read: true})
        .pipe(gulp.dest('./build'))
})

/* 
 * This puts all the modules into one file so that Marketers
 * can go to https://thoughtworks.fileburst.com/mythoughtworks/modules/modules.html
 * and copy paste HTML to add to thier page.
*/
gulp.task('modules', function() {
  var modulesPath = './src/modules/';
  return gulp.src([modulesPath+'categories.html', 
                   modulesPath+'featured-items.html',
                   modulesPath+'featured-links.html',
                   modulesPath+'tabs.html',
                   modulesPath+'featured-docs.html',
                   modulesPath+'about-group.html',
                   modulesPath+'bottom-nav.html',
                   modulesPath+'segmenter.html',
                   modulesPath+'video-grid.html'
                  ])
         .pipe(makeModules())
         .pipe(concat('modules.html'))
         .pipe(finish())
         .pipe(gulp.dest('./build/modules/'))
})


/* 
 Through Stream helper to put all the modules into one file.
*/
function makeModules(opt) {
  var stream = through.obj(function(file, encoding, callback) {
    console.log('file.path: '+file.path);
    file.contents = new Buffer(file.contents.toString().replace(/<html>[^]+<body>|<\/body>[^]+<\/html>/g, ''))
    this.push(file);
    callback();
  })

  return stream;
}


/* 
 Wrapper that uses the template + filestream to put all the modules into one file.
*/
function finish() {
  var stream = through.obj(function(file, encoding, callback) {
    var fileString = moduleTemplate().replace(/{{content}}/g, file.contents.toString());
    file.contents = new Buffer(fileString);
    this.push(file);
    callback();
  })

  return stream;
}


/* 
 Template to put modules into one file.
*/
function moduleTemplate() {
  return '<html>\n'+
         '  <head>\n'+
         '    <link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,200,400,300,600,700,800" rel="stylesheet" type="text/css" />\n'+
         '    <link rel="stylesheet" href="../css/styles.css">\n'+
         '    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>\n'+
         '    <script>placeID=143254</script>\n'+
         '    <script src="../js/app.js"></script>\n'+
         '  </head>\n'+
         '  <body>\n'+
         '{{content}}'+
         '  </body>\n'+
         '</html>';
}