let fileswatch = 'html,htm,txt,json,md,woff2' // List of files extensions for watching & hard reload

const { src, dest, parallel, series, watch } = require('gulp')
const svgSprite 	 = require('gulp-svg-sprite');
const browserSync  = require('browser-sync').create()
const bssi         = require('browsersync-ssi')
const ssi          = require('ssi')
const webpack      = require('webpack-stream')
const sass         = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const rename       = require('gulp-rename')
const imagemin     = require('gulp-imagemin')
const newer        = require('gulp-newer')
const rsync        = require('gulp-rsync')
const del          = require('del')
const ts 		   = require("gulp-typescript");

function svg() {
	return src('**/*.svg', { cwd: 'app/sass/svg/assets' })
		.pipe(svgSprite({
				mode: {
					symbol: true // Activate the «symbol» mode
				}
			}
		))
		.pipe(dest('app/sass/svg/out'));
}

function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/',
			middleware: bssi({ baseDir: 'app/', ext: '.html' })
		},
		tunnel: 'yousutename', // Attempt to use the URL https://yousutename.loca.lt
		notify: false,
		online: true
	})
}

function typescript() {
	return src('app/js/**/*.ts')
		.pipe(ts({
			noImplicitAny: true,
			outFile: 'output.js',
			target: 'ES6'
		}))
		.pipe(dest('app/js'));
}

function scripts() {
	return src('app/js/app.js')
		.pipe(webpack({
			mode: 'production',
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: ['@babel/env'],
							plugins: ['babel-plugin-root-import']
						}
					}
				]
			}
		})).on('error', function handleError() {
			this.emit('end')
		})
		.pipe(rename('app.min.js'))
		.pipe(dest('app/js'))
		.pipe(dest("C:\\xampp\\htdocs\\dprom\\wp-content\\themes\\dprom3\\js"))
		.pipe(browserSync.stream())
}

function styles() {
	return src('app/sass/main.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(autoprefixer({ grid: 'autoplace' }))
		.pipe(rename('style.css'))
		.pipe(dest('app/sass'))
		.pipe(dest("C:\\xampp\\htdocs\\dprom\\wp-content\\themes\\dprom3"))
		.pipe(browserSync.stream())
}

function images() {
	return src(['app/images/src/**/*'])
		.pipe(newer('app/sass/img'))
		.pipe(imagemin())
		.pipe(dest('app/sass/img'))
		.pipe(browserSync.stream())
}

function buildcopy() {
	return src([
		'{app/js,app/css}/*.min.*',
		'app/images/**/*.*',
		'!app/images/src/**/*',
		'app/fonts/**/*'
	], { base: 'app/' })
		.pipe(dest('dist'))
}

async function buildhtml() {
	let includes = new ssi('app/', 'dist/', '/**/*.html')
	includes.compile()
	del('dist/parts', { force: true })
}

function cleandist() {
	return del('dist/**/*', { force: true })
}

function deploy() {
	return src('dist/')
		.pipe(rsync({
			root: 'dist/',
			hostname: 'username@yousite.com',
			destination: 'yousite/public_html/',
			include: [/* '*.htaccess' */], // Included files to deploy,
			exclude: [ '**/Thumbs.db', '**/*.DS_Store' ],
			recursive: true,
			archive: true,
			silent: false,
			compress: true
		}))
}

function startwatch() {
	watch('app/sass/svg/assets/*', { usePolling: true }, svg)
	watch('app/sass/**/*.scss', { usePolling: true }, styles)
	watch(['app/js/**/*.ts'], { usePolling: true }, typescript)
	watch(['app/js/app.js', '!app/js/**/*.min.js'], { usePolling: true }, scripts)
	watch('app/images/src/**/*.{jpg,jpeg,png,webp,svg,gif}', { usePolling: true }, images)
	watch(`app/**/*.{${fileswatch}}`, { usePolling: true }).on('change', browserSync.reload)
}

exports.scripts = scripts
exports.styles  = styles
exports.typeScript  = typescript
exports.images  = images
exports.deploy  = deploy
exports.assets  = series(scripts, styles, images)
exports.build   = series(cleandist, scripts, styles, images, buildcopy, buildhtml)
exports.default = series(scripts, styles, typescript, parallel(browsersync, startwatch))
