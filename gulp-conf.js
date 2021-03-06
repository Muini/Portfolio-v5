var conf = {
  paths: {
    proxy: 'corentinflach.devlocal',
    app: 'app',
    dist: 'dist',
    scripts: 'app/scripts',
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
        'Ionicons/css/ionicons.min.css'
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
        'history.js/scripts/bundled/html5/native.history.js',
        'jquery/dist/jquery.min.js',
        'jquery.nicescroll/dist/jquery.nicescroll.min.js'
      ]
    },
    custom: {
      prefix: 'app/scripts/',
      files: [
        'app.js'
      ]
    }
  }
};

module.exports = conf;
