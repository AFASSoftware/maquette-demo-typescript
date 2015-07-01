var gulp = require("gulp");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var browserify = require("browserify");
var tsify = require("tsify");
var gutil = require("gulp-util");

gulp.task("javascript", function () {
  // set up the browserify instance on a task basis
  var b = browserify({
    entries: "src/script.ts",
    debug: true
  });
  b.on("log", gutil.log); // output build logs to terminal
  b.plugin("tsify");

  return b.bundle()
    // log errors if they happen
    .on("error", gutil.log.bind(gutil, "Browserify Error"))
    .pipe(source("bundle.js"))
    // optional, remove if you don"t need to buffer file contents
    .pipe(buffer())
    // optional
    .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    // Add transformation tasks to the pipeline here.
    .pipe(sourcemaps.write("../sourcemaps")) // writes .map file
    .pipe(gulp.dest("./build/js"));
});

gulp.task("watch", ["javascript"], function() {
  gulp.watch("src/**/*.ts", ["javascript"]);
});

gulp.task("default", ["javascript"]);