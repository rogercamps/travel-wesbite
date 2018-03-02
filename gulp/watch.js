gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html')
  })
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('html')
  })  
})