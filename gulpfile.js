'use strict';

const gulp = require( 'gulp' );
const ts = require( 'gulp-typescript' );
const babel = require( 'gulp-babel' );

const tsProject = ts.createProject('./tsconfig.json');

const SOURCE = [
  './typings/main.d.ts',
  './src/**/*.ts',
];
const DESTINATION = './lib/';


gulp.task( 'build', function() {
  return gulp.src( SOURCE )
  .pipe( ts( tsProject ) )
  .pipe( babel() )
  .pipe( gulp.dest( DESTINATION ) );
} );

gulp.task( 'watch', [ 'build' ], function() {
  gulp.watch( SOURCE, [ 'build' ] );
} );

gulp.task( 'default', [ 'build' ] );
