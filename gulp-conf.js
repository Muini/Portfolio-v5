var conf = {
  paths: {
    proxy: 'corentinflach.devlocal',
    app: 'app',
    dist: 'dist',
    scripts: 'app/scripts',
    inc: 'app/inc',
    styles: 'app/styles',
    css: 'app/styles/css',
    sass: 'app/styles/scss',
    images: 'app/img',
    fonts: 'app/fonts'
  },
  autoprefixerConf: {
    browsers: ['> 1%', 'last 2 versions']
  },
  sassConf: {
    indentedSyntax: false,
    stylesFormat: '.scss',
    mainSass: 'main',
    includePaths: [
      'app/bower_components/bootstrap-sass-official/assets/stylesheets/',
      'app/styles/scss/'
    ]
  },
  compassConf: {
    usesCompass: false,
    configRbPath: 'path/to/config.rb'
  },
  styles: {
    lib: {
      prefix: 'app/bower_components/',
      files: [
        'normalize.css/normalize.css',
        'bootstrap/'
      ]
    },
    custom: {
      prefix: 'app/styles/',
      files: []
    }
  },
  scripts: {
    lib: {
      prefix: 'app/bower_components/',
      files: [
        'jquery/dist/jquery.js',
        'handlebars/handlebars.js'
      ]
    },
    custom: {
      prefix: 'app/scripts/',
      files: [
        'components/map.js',
        'app.js'
      ]
    }
  }
};

module.exports = conf;
