var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import')


gulp.task('default', function() {
  console.log('hooray!!!!!!!');
    
})

gulp.task('html', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
    .on('error', function(errorInfo) {
    console.log(errorInfo.toString())
    this.emit('end')
  })
  .pipe(gulp.dest('./app/temp/styles'))
})
