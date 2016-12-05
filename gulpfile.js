'use strict';

const path = require('path');
const gulp = require('gulp');
const addsrc = require('gulp-add-src');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const inject = require('gulp-inject');
const less = require('gulp-less');
const webpack = require('webpack-stream');

const SRC = 'src';
const DEST = 'dist';

const webpackOptions = {
  resolve: {
    root: [
      path.resolve(SRC)
    ]
  },
  output: {
    library: 'App'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015']
      }
    }]
  }
};

gulp.task('fonts', () => gulp.src('node_modules/bootstrap/fonts/*').pipe(gulp.dest(`${DEST}/fonts`)));

gulp.task('styles', ['fonts'], () => gulp.src([`${SRC}/**/*.less`])
  .pipe(less({
    paths: [`${SRC}/styles`]
  }))
  .pipe(cleanCSS())
  .pipe(addsrc.prepend(`${SRC}/styles/bootstrap.css`))
  .pipe(addsrc.prepend(`${SRC}/styles/ress.css`))
  .pipe(concat('styles.css'))
  .pipe(gulp.dest(DEST))
);

function templateName(filePath) {
  return `${path.dirname(filePath).split(path.sep).pop()}-${path.basename(filePath, '.html').replace('.', '-')}`;
}

gulp.task('templates', () => gulp.src(`${SRC}/index.tpl.html`)
  .pipe(inject(gulp.src([`${SRC}/**/*.tpl.html`, `!${SRC}/index.tpl.html`]), {
    transform: (filePath, file) =>
      `<script type="text/template" id="${templateName(filePath)}">\n${file.contents.toString('utf8')}</script>`
  }))
  .pipe(concat('index.html'))
  .pipe(gulp.dest(DEST))
);

gulp.task('vendor', () => gulp.src([
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/underscore/underscore-min.js',
    'node_modules/backbone/backbone-min.js',
    'node_modules/backbone.radio/build/backbone.radio.min.js',
    'node_modules/backbone.marionette/lib/backbone.marionette.min.js'
  ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(DEST))
);

gulp.task('default', ['templates', 'styles', 'vendor'], () => {
  return gulp.src(`${SRC}/app.js`)
    .pipe(webpack(webpackOptions))
    .pipe(concat('build.js'))
    .pipe(gulp.dest(DEST));
});

gulp.task('dev', ['default'], () => gulp.watch(`${SRC}/**/*`, ['default']));
