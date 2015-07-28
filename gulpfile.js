var gulp = require('gulp');
var gutil = require('gulp-util')
var sass = require('gulp-ruby-sass');
var webpack = require("webpack");
var nodemon = require('gulp-nodemon');

var paths = {
  jsx_scripts: ['./src/**/*.jsx', './src/*.jsx'],
  styles: ['./src/sass/*.scss']
};

gulp.task('styles', function() {
	return sass('src/sass/main.scss')
		.pipe(gulp.dest('public/stylesheets'));
});

var config = {
	entry: './src/index.jsx',
	output: {
		path: './public/build',
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loaders: ['babel']
			}
		]
	},
  plugins: [
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};

gulp.task('webpack', function(done) {
  webpack(config).run(function(err, stats) {
    if(err) {
      console.log('Error', err);
    }
    else {
      console.log(stats.toString());
    }
    done();
  });
});

gulp.task('watch', function() {
  gulp.watch(paths.jsx_scripts, ['webpack']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('default', function() {  
    gulp.start('styles', 'webpack');
});