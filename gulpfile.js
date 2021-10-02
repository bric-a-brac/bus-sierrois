
let gulp = require('gulp');
let nunjucks = require('gulp-nunjucks');

function build(callback)
	{
	gulp.src('docs/templates/stop.njk').pipe(nunjucks.precompile({name: 'Stop'})).pipe(gulp.dest('docs/templates/'));
	gulp.src('docs/templates/stops.njk').pipe(nunjucks.precompile({name: 'Stops'})).pipe(gulp.dest('docs/templates/'));
	gulp.src('docs/templates/way.njk').pipe(nunjucks.precompile({name: 'Way'})).pipe(gulp.dest('docs/templates/'));

	callback();
	}

exports.default = build;
