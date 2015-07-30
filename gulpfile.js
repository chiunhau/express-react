var gulp = require('gulp');
var gutil = require('gulp-util')
var sass = require('gulp-sass');
var webpack = require("webpack");
var nodemon = require('gulp-nodemon');

var paths = {
  jsx_scripts: ['./src/**/*.jsx', './src/*.jsx'],
  styles: ['./src/sass/*.scss']
};

gulp.task('styles', function() {
	return gulp.src(paths.styles)
    .pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('public/stylesheets'));
});

var config = {
	entry: './src/main.jsx',
	output: {
		path: './public/javascripts',
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

gulp.task('watch-webpack', function() {
  gulp.start('webpack');
  gulp.watch(paths.jsx_scripts, ['webpack']);
});

gulp.task('watch', function() {
  gulp.start('styles');
  gulp.watch(paths.styles, ['styles']);
})

gulp.task('default', function() {  
    gulp.start('styles', 'webpack');
});