const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

//compila o código e copia o código gerado
gulp.task('scripts', ['static'], () => {

    const tsResult = tsProject.src()
        .pipe(tsProject());
    
    return tsResult.js
        .pipe(gulp.dest('dist'));

});


//copia os arquivos json para a pasta dist
gulp.task('static', ['clean'], () => {
    return gulp
        .src(['src/**/*.json'])
        .pipe(gulp.dest('dist'));
});

//apaga arquivos inexistentes
gulp.task('clean', () => {
    return gulp
        .src('dist')
        .pipe(clean());
});

//pipe de build
gulp.task('build', ['scripts']);

//compila automáticamente
gulp.task('watch', ['build'], () => {
    return gulp.watch(['src/**/*.ts', 'src/**/*.json'], ['build']);
});

//default
gulp.task('default', ['watch']);