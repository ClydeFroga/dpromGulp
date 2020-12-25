// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)

document.addEventListener('DOMContentLoaded', () => {

	function expand() {
		let block = document.querySelector('.header__container')
		let but = document.querySelector('.header__topButtons span:first-child')
		let bot = document.querySelector('.header__bot')
		let hiddenHeight = document.querySelector('.header__hidden').scrollHeight
		let top = document.querySelector('.header__top')

		top.classList.remove('release')
		bot.style.marginTop = `${hiddenHeight + 30}px`;
		but.style.opacity = '0';
		setTimeout(() => but.style.display = 'none', 500)
		block.classList.add('expanded')
	}
	
	document.querySelector('.header__topButtons > span:first-child').addEventListener('mouseup', expand)

	function collapse() {
		let block = document.querySelector('.header__container')
		let top = document.querySelector('.header__top')

		if(block.classList.contains('expanded')) {
			block.classList.remove('expanded')
			let bot = document.querySelector('.header__bot')
			bot.style.marginTop = ``;
			let but = document.querySelector('.header__topButtons span:first-child')
			but.style.display = 'block'
			setTimeout(() => but.style.opacity = '1', 100)
		} else {
			block.classList.add('collapsed')
			setTimeout(() => top.classList.add('release'), 100)
			localStorage.setItem('topCollapsed', 'true')
		}
	}

	document.querySelector('.header__topButtons > span:last-child').addEventListener('mouseup', collapse)

	function expandAgain() {
		let block = document.querySelector('.header__container')
		block.classList.remove('collapsed')
		localStorage.removeItem('topCollapsed')

		setTimeout(expand, 200)
	}

	document.querySelector('.header__topButtonsHidden > span:first-child').addEventListener('mouseup', expandAgain)

	function subMenu(menu, parent) {
		parent.classList.toggle('open')
		menu.classList.toggle('expanded')
	}

	let subMenus = document.querySelectorAll('.sub-menu')
	if(subMenus.length > 0) {
		for(let item of subMenus) {
			item.parentNode.addEventListener('click', () => subMenu(item, item.parentNode) )
		}
	}

	function menuToggle() {
		let menu = document.querySelector('.header__botBottom')

		menu.classList.toggle('expanded')
	}

	let toggler = document.querySelector('.toggler')
	toggler.addEventListener('mouseup', menuToggle)

	function filter(item, text) {
		let block = document.querySelector(`#${item}`)
		let news = document.querySelectorAll(`.filterBlock .horizontalBar > .${item}`)
		let catBlock = document.querySelector('.journal__block1LeftNewsCategories')

		if(block.classList.contains('filtered')) {
			block.classList.remove('filtered')
			let cat = document.querySelector(`#blockCat > span.${item}`)
			cat.remove()
			for(let bl of news) {
				bl.classList.remove('filtered')
			}
			let anyone = document.querySelectorAll('.journal__block1LeftSections .sections__blocksBlock.filtered')
			if(anyone.length === 0) {
				for (let i of mainBlock) {
					i.classList.remove('filtered')
				}
				catBlock.classList.remove('disp')
			}
			return
		}

		catBlock.classList.add('disp')
		block.classList.add('filtered')
		categories.insertAdjacentHTML('beforeend', `<span class="${item}">${text}</span>`)
		for (let i of mainBlock) {
			i.classList.add('filtered')
		}
		for(let bl of news) {
			bl.classList.add('filtered')
		}

	}

	let mainBlock = ''
	let categories = ''
	let filterItems = document.querySelectorAll('.journal__block1LeftSections .sections__blocksBlock')
	if(filterItems.length > 0) {
		for(let item of filterItems) {
			item.addEventListener('mouseup', () => filter(item.id, item.innerText) )
		}
		categories = document.querySelector('#blockCat')
		mainBlock = document.querySelectorAll(`.filterBlock`)
	}

	function resetFilter() {
		let blocksUpper = document.querySelectorAll('.sections__blocksBlock.filtered')
		let cats = document.querySelectorAll('#blockCat > span')
		let news = document.querySelectorAll(`.filterBlock .horizontalBar > .filtered`)
		let filterBlock = document.querySelectorAll('.filterBlock')
		let catBlock = document.querySelector('.journal__block1LeftNewsCategories')


		catBlock.classList.remove('disp')
		for(let item of cats) {
			item.remove()
		}
		for(let item of filterBlock) {
			item.classList.remove('filtered')
		}
		for(let item of blocksUpper) {
			item.classList.remove('filtered')
		}
		for(let item of news) {
			item.classList.remove('filtered')
		}
	}

	let reset = document.querySelector('#resetFilter')
	if(reset !== null) {
		reset.addEventListener('mouseup', resetFilter)
	}

	function popularUnfold() {
		let popularNews = document.querySelector('.popular')

		popularNews.classList.toggle('open')
	}

	let popular__hidden = document.querySelector('.popular__hidden')
	if (popular__hidden !== null) {
		popular__hidden.addEventListener('mouseup', popularUnfold)
	}

	function openModal() {
		let modal = document.querySelector('.modalSubscription')
		modal.style.display = 'block'
		let j = 0;
		for(let i = 0; i < 1; i+=0.1) {
			setTimeout(() => {
				modal.style.opacity = `${i}`
			}, j)
			j+= 25;
		}
	}

	function closeModal() {
		let modal = document.querySelector('.modalSubscription')

		modal.style.display = 'none'
		modal.style.opacity = '0'
	}

	document.querySelector('#closeModal').addEventListener('mouseup', closeModal)
	let openModalBut = document.querySelectorAll('#openModal')
1
	if(openModalBut.length > 0) {
		openModalBut.addEventListener('mouseup', openModal)
	}


})

function slider() {
	var sliderBigOne = new Swiper('.sliderBigOne', {
		spaceBetween: 20,
		slidesPerView: 1.3,

		breakpoints: {
			768: {
				slidesPerColumnFill: 'row',
				slidesPerColumn: 2,
				slidesPerView: 3,
			},
			1201: {
				slidesPerView: 5,
			},
		},
		scrollbar: {
			el: '#sliderBigOne-scrollbar',
			draggable: true,
			hide: false,
		},
	});
	var sliderBigTwo = new Swiper('.sliderBigTwo', {
		spaceBetween: 20,
		slidesPerView: 1.3,

		breakpoints: {
			768: {
				slidesPerView: 4,
			},
			1024: {
				slidesPerView: 5,
			},
		},
		scrollbar: {
			el: '#sliderBigTwo-scrollbar',
			draggable: true,
			hide: false,
		},
	});
	var sliderDouble = new Swiper('#sliderMini', {
		spaceBetween: 15,
		slidesPerView: 1.3,
		breakpoints: {
			576: {
				slidesPerView: 3,
			},
			768: {
				slidesPerColumnFill: 'row',
				slidesPerView: 2,
				allowTouchMove: false,
				slidesPerColumn: 2,
			},
		},
	});
	var sliderTriple = new Swiper('#sliderThreeBlock', {
		spaceBetween: 15,
		slidesPerView: 1.3,
		breakpoints: {
			768: {
				allowTouchMove: false,
				slidesPerView: 3,
			},
		},
	});
	var sliderFourth = new Swiper('#sliderFourthBlock', {
		spaceBetween: 8,
		slidesPerView: 1.3,

		breakpoints: {
			768: {
				slidesPerView: 4,
			},
		},
		scrollbar: {
			el: '#sliderFourth-slider',
			draggable: true,
			hide: false,
		},
	});
	var sliderFive = new Swiper('#sliderFiveBlock', {
		spaceBetween: 10,
		slidesPerView: 1.3,

		breakpoints: {
			768: {
				spaceBetween: 25,
				slidesPerColumnFill: 'row',
				slidesPerView: 3,
				allowTouchMove: false,
				slidesPerColumn: 2,
			},
		},
	});
}
document.addEventListener('DOMContentLoaded', slider)

let arrowUp= ''
let getArrowUpObj = {
	on: function () {
		arrowUp.style.display = 'flex'
		setTimeout(() =>arrowUp.classList.add('visible'), 500)
	},
	off: function () {
		arrowUp.classList.remove('visible')
		setTimeout(() =>arrowUp.style.display = '', 500)
	},
	getArrowUp: function () {
		arrowUp = document.querySelector('.listedUp')
		document.addEventListener('scroll', getArrowUpObj.onScroll)
		arrowUp.addEventListener('mouseup', getArrowUpObj.toUp)
	},
	onScroll: function () {
		if(pageYOffset > 700) {
			if(!arrowUp.classList.contains('visible')) {
				getArrowUpObj.on()
			}
		} else if(pageYOffset < 400) {
			if(arrowUp.classList.contains('visible')) {
				getArrowUpObj.off()
			}
		}
	},
	toUp: function () {
		document.removeEventListener('scroll',getArrowUpObj.onScroll)
		getArrowUpObj.off()
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		setTimeout(() => document.addEventListener('scroll', getArrowUpObj.onScroll), 2000)
	},
}
if(document.documentElement.clientWidth > 768) {
	document.addEventListener('DOMContentLoaded', getArrowUpObj.getArrowUp)
}
