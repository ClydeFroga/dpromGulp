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
	
	let expandBut = document.querySelector('.header__topButtons > span:first-child')

	if (expandBut !== null) {
		expandBut.addEventListener('mouseup', expand)
	}

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

	let collapseBut = document.querySelector('.header__topButtons > span:last-child')

	if (collapseBut !== null) {
		let addBut = document.querySelector('.collapseAdditionalButton')
		collapseBut.addEventListener('mouseup', collapse)
		addBut.addEventListener('mouseup', collapse)
	}

	function expandAgain() {
		let block = document.querySelector('.header__container')
		block.classList.remove('collapsed')
		localStorage.removeItem('topCollapsed')

		setTimeout(expand, 200)
	}

	let expandAgainBut = document.querySelector('.header__topButtonsHidden > span:first-child')

	if (expandAgainBut !== null) {
		expandAgainBut.addEventListener('mouseup', expandAgain)
	}


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

	if(openModalBut.length > 0) {
		for(let item of openModalBut) {
			item.addEventListener('mouseup', openModal)
		}
	}

	function editBackgroundImage() {
		let blc = document.querySelector('.header__top')
		let set = blc.dataset.srcSet.split(',')
		let desk =  set[0]
		let mob = set[1]
		let width = document.documentElement.clientWidth

		if (width >= 577) {
			blc.style.backgroundImage = `url('${desk}')`
		} else {
			blc.style.backgroundImage = `url('${mob}')`
		}
		makeHeight()
	}

	function makeHeight() {
		let blc2 = document.querySelector('.header__container')
		let width = document.documentElement.clientWidth;
		if(!blc2.classList.contains('collapsed')) {
			if (width >= 577) {
				if(!blc2.classList.contains('collapsed')) {
					let heightOfImg = (width / 2000) * 220;
					blc2.style.height = `${heightOfImg}px`
				}
			} else {
				if(!blc2.classList.contains('collapsed')) {
					let heightOfImg = (width / 576) * 100;
					blc2.style.height = `${heightOfImg}px`
				}
			}
		}
	}

	editBackgroundImage()

	window.addEventListener("orientationchange", function () {
		setTimeout(editBackgroundImage, 100)
		setTimeout(makeHeight, 150)
	});

})

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
		}
		else if(pageYOffset < 400) {
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

let bottomBlock = {
	up: '',
	bottom: '',
	button: '',
	height: document.documentElement.clientHeight,
	getBlock(opt = true) {
		this.up = document.querySelector('.bottomFixedBlock')
		this.button = document.querySelector('.bottomFixedBlock__collapse')
		if (this.up == null) return

		if(opt) {
			let func = this.onScroll.bind(bottomBlock)
			let click = this.buttonClick.bind(bottomBlock)
			document.addEventListener('scroll', func)
			this.button.addEventListener('click', click)
			setTimeout(this.bottomMargin(), 1000)

		} else {
			this.up.classList.add('hidden')
		}
	},
	onScroll() {
		if(pageYOffset > 100 && !((pageYOffset + 300 + this.height) > this.bottom)) {
			if(!this.up.classList.contains('visible')) {
				this.on()
			}
		}
		else if(pageYOffset < 100 || (pageYOffset + 300 + this.height) > this.bottom) {
			if(this.up.classList.contains('visible')) {
				this.off()
			}
		}
	},
	on() {
		this.up.style.display = 'flex'
		setTimeout(() => this.up.classList.add('visible'), 500)
	},
	off() {
		this.up.classList.remove('visible')
		setTimeout(() => this.up.style.display = '', 500)
	},
	buttonClick() {
		this.up.classList.add('hidden')
		localStorage.setItem('bottomBlock', 'hidden')
	},
	bottomMargin() {
		let cookie = document.querySelector('#cookie-notice.cookie-notice-visible')
		if (cookie != null) {
			this.up.style.bottom = cookie.offsetHeight + 'px'
			let buttons = []
			buttons.push(cookie.querySelector('#cn-accept-cookie'))
			buttons.push(cookie.querySelector('#cn-close-notice'))
			for (let but of buttons) {
				but.addEventListener('click', () => {
					bottomBlock.up.style.bottom = '0'
				}, {
					once: true
				})
			}

		}
	}

}


if(localStorage.getItem("bottomBlock") !== "hidden") {
	setTimeout(() => {
		bottomBlock.bottom = document.querySelector('body').clientHeight
		bottomBlock.getBlock()
	}, 1000)
}
else {
	bottomBlock.getBlock(false)
}
