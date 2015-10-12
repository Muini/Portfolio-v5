/* Custom configuration files */
var conf = require('./gulp-conf');

/* Gulp plugins */
var gulp         = require('gulp'),
    browserSync  = require('browser-sync'),
    rename       = require("gulp-rename"),
    rev          = require('gulp-rev'),
    sass         = require('gulp-sass'),
    compass      = require('gulp-compass'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    clean        = require('gulp-clean'),
    minifyCSS    = require('gulp-minify-css'),
    autoprefix   = require('gulp-autoprefixer'),
    include      = require('gulp-include');         // Plugin to include files into others
    htmlmin      = require('gulp-htmlmin'),
    htmlreplace  = require('gulp-html-replace'),
    imagemin     = require('gulp-imagemin'),
    sourcemaps   = require('gulp-sourcemaps'),
    util         = require('gulp-util'),
    gulpSequence = require('gulp-sequence'),
    pngquant     = require('imagemin-pngquant'),
    es           = require('event-stream'),
    wallpaper    = require('wallpaper'),
    reload       = browserSync.reload;

/* Concatenates vendor & custom styles + sass compilation */
gulp.task('styles', function () {
  var vendors = conf.styles.lib.files.map(function(fileName) { return conf.styles.lib.prefix + fileName; }),
      custom = conf.styles.custom.files.map(function(fileName) { return conf.styles.custom.prefix + fileName; }),
      cssFiles = gulp.src(vendors.concat(custom)),
      sassFiles = gulp.src(conf.paths.sass + '/' + conf.sassConf.mainSass + conf.sassConf.stylesFormat);

  if (!!conf.compassConf.usesCompass) {
    /* If we use the compass framework */
    sassFiles = sassFiles
      .pipe(sourcemaps.init())
      .pipe(compass({
        config_file: conf.compassConf.configRbPath,
        css: conf.paths.css,
        sass: conf.paths.sass,
        image: conf.paths.images,
        require: ['reset']
      }));
  } else {
    /* Otherwise we only compile sass files */
    sassFiles = sassFiles
      .pipe(sourcemaps.init())
      .pipe(sass(conf.sassConf));
  }

  var task = es.concat(cssFiles, sassFiles)
    .pipe(include())
    .pipe(autoprefix(conf.autoprefixerConf))
    .pipe(minifyCSS({keepSpecialComments: 0, advanced: false}))
    .pipe(concat('production.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.paths.dist + '/styles'))

  return browserSync.active ? task.pipe(reload({ stream: true })) : task;
});

/* Javascript tast */
gulp.task('scripts', function() {
  var vendors = conf.scripts.lib.files.map(function(fileName) { return conf.scripts.lib.prefix + fileName; }),
      custom = conf.scripts.custom.files.map(function(fileName) { return conf.scripts.custom.prefix + fileName; });

  var task = gulp.src(vendors.concat(custom))
    .pipe(include())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat('production.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.paths.dist + '/scripts'));
});

gulp.task('html', function() {
    var task = gulp.src(conf.paths.app + '/index.php')
    .pipe(include())
    .pipe(sourcemaps.init())
    .pipe(concat('index.php'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.paths.dist));
});

/* Dist image optimization */
gulp.task('images', function() {
  return gulp.src(conf.paths.images + '/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(conf.paths.dist + '/img'));
});

/*
  Live browserSync server, taking care of the
  styles and scripts changes automatically
 */
gulp.task('serve', ['styles', 'scripts', 'html'], function () {
  /* Start browsersync for socket live reload */

  browserSync({
    proxy: conf.paths.proxy,
    notify: true,
    ghostMode: {
      clicks: true,
      forms: true,
      scroll: true
    }
  });

  /* Watch styles */
  gulp.watch([
    conf.paths.styles + '/**/*' + conf.sassConf.stylesFormat,
    conf.paths.styles + '/**/*.css',
    '!' + conf.paths.styles + '/production.css'
  ], ['styles', 'copy', reload]);

  /* Watch scripts */
  gulp.watch([
    conf.paths.scripts + '/**/*.js'
  ], ['scripts', 'copy', reload]);

  /* Watch html & php */
  gulp.watch([
    conf.paths.app + '/**/*.html',
    conf.paths.app + '/**/*.php'
  ], ['html', 'copy', reload]);

  /* Watch images */
  gulp.watch([
    conf.paths.app + '/**/*.png',
    conf.paths.app + '/**/*.gif',
    conf.paths.app + '/**/*.jpg',
    conf.paths.app + '/**/*.jpeg'
  ], ['images', 'copy', reload]);
});

/* Copy important files into the dist folder */
gulp.task('copy', function() {
  return gulp.src([
      conf.paths.app + '/**',
      '!' + conf.paths.app + '/styles',
      '!' + conf.paths.app + '/styles/**',
      '!' + conf.paths.app + '/scripts',
      '!' + conf.paths.app + '/scripts/**',
      '!' + conf.paths.app + '/**/*.gitkeep',
      '!' + conf.paths.app + '/bower_components',
      '!' + conf.paths.app + '/bower_components/**'
    ], { dot: true })
  .pipe(gulp.dest(conf.paths.dist));
});

/* Total dist cleaning */
gulp.task('clean', function() {
  return gulp.src(conf.paths.dist)
    .pipe(clean({ force: true }));
});

/* Simple scripts and styles build */
gulp.task('default', gulpSequence('clean', ['html', 'styles', 'copy'], ['images', 'scripts'], 'serve'));

/* Build task, concat & uglify + image optimization */
gulp.task('build', gulpSequence('clean-before', ['images', 'copy']));
