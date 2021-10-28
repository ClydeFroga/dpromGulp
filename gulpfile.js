let preprocessor = 'sass'
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
const cleancss     = require('gulp-clean-css')
const sassglob     = require('gulp-sass-glob')
// const ts 		   = require("gulp-typescript");

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
		ghostMode: { clicks: false },
		notify: false,
		online: false,
		// tunnel: 'yousutename', // Attempt to use the URL https://yousutename.loca.lt
	})
}


// function typescript() {
// 	return src('app/js/**/*.ts')
// 		.pipe(ts({
// 			noImplicitAny: true,
// 			outFile: 'output.js',
// 			target: 'ES6'
// 		}))
// 		.pipe(dest('app/js'));
// }

function scripts() {
	return src('app/js/app.js')
		.pipe(webpack({
			mode: 'production',
			performance: { hints: false },
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
	return src([`app/${preprocessor}/main.scss`, `!app/${preprocessor}/_*.*`])
		.pipe(eval(`${preprocessor}glob`)())
		.pipe(eval(preprocessor)())
		.pipe(autoprefixer())
		.pipe(cleancss({ level: { 1: { specialComments: 0 } },/* format: 'beautify' */ }))
		.pipe(rename('style.css'))
		.pipe(dest("C:\\xampp\\htdocs\\dprom\\wp-content\\themes\\dprom3"))
		.pipe(browserSync.stream())
}

// function styles() {
// 	return src('app/sass/main.scss')
// 		.pipe(sass({ outputStyle: 'compressed' }))
// 		.pipe(rename('style.css'))
// 		.pipe(dest('app/sass'))
// 		.pipe(dest("C:\\xampp\\htdocs\\dprom\\wp-content\\themes\\dprom3"))
//
// 		// .pipe(autoprefixer({ grid: 'autoplace' }))
// 		// .pipe(rename('styleIE.css'))
// 		// .pipe(dest("C:\\xampp\\htdocs\\dprom\\wp-content\\themes\\dprom3\\style"))
// 		.pipe(browserSync.stream())
// }

function stylesMWR() {
	return src('app/sass/specMWR.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(rename('mwr2021.css'))
		.pipe(dest('app/sass'))
		.pipe(dest("C:\\xampp\\htdocs\\dprom\\wp-content\\themes\\dprom3\\style"))
		.pipe(browserSync.stream())
}

function styleMiner() {
	return src('app/sass/miner.scss')
		.pipe(sass({ outputStyle: 'compressed' }))
		.pipe(rename('miner.css'))
		.pipe(dest('app/sass'))
		.pipe(dest("C:\\xampp\\htdocs\\dprom\\wp-content\\themes\\dprom3\\style"))
			// .pipe(autoprefixer({grid: "autoplace", flexbox: true}))
			// .pipe(rename("styleIEMiner.css"))
			// .pipe(dest("C:\\xampp\\htdocs\\dprom\\wp-content\\themes\\dprom3\\style"))
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
	watch('app/sass/miner.scss', { usePolling: true }, styleMiner)
	watch('app/sass/specMWR.scss', { usePolling: true }, stylesMWR)
	// watch(['app/js/**/*.ts'], { usePolling: true }, typescript)
	watch(['app/js/**.js', '!app/js/**/*.min.js'], { usePolling: true }, scripts)
	watch('app/images/src/**/*.{jpg,jpeg,png,webp,svg,gif}', { usePolling: true }, images)
	watch(`app/**/*.{${fileswatch}}`, { usePolling: true }).on('change', browserSync.reload)
}

exports.scripts = scripts
exports.styles  = styles
exports.stylesMWR  = stylesMWR
exports.styleMiner  = styleMiner
// exports.typeScript  = typescript
exports.images  = images
exports.deploy  = deploy
exports.assets  = series(scripts, styles, images)
exports.build   = series(cleandist, scripts, styles, images, buildcopy, buildhtml)
exports.default = series(scripts, styleMiner,stylesMWR, styles, parallel(browsersync, startwatch))
