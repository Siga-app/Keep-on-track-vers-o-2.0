'use strict';

const gulp = require('gulp');
const useref = require('gulp-useref');
const gulpIf = require('gulp-if');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

module.exports = function(conf) {

  // Processa os arquivos HTML, concatenando e minificando referências a CSS e JS
  function prodUseRefTasks() {
    return gulp.src('html/**/*.html', { allowEmpty: true })
      .pipe(useref({ searchPath: ['.', 'html'], allowEmpty: true }))
      .pipe(gulpIf('*.js', uglify()))
      .pipe(gulpIf('*.css', cleanCSS()))
      .pipe(gulp.dest(conf.distPath));
  }

  // Copia os ativos (assets) para o diretório de build
  function prodCopyAssets() {
    return gulp.src('assets/**/*', { allowEmpty: true })
      .pipe(gulp.dest(conf.distPath + '/assets'));
  }

  const all = gulp.series(prodUseRefTasks, prodCopyAssets);

  return {
    all: all,
    useRef: prodUseRefTasks,
    copyAssets: prodCopyAssets
  };
};
