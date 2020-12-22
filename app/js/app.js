// import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)

document.addEventListener('DOMContentLoaded', () => {

	function expand() {
		let block = document.querySelector('.header__container')
		let but = document.querySelector('.header__topButtons span:first-child')
		let bot = document.querySelector('.header__bot')
		let hiddenHeight = document.querySelector('.header__hidden').scrollHeight

		bot.style.marginTop = `${hiddenHeight + 30}px`;
		but.style.opacity = '0';
		setTimeout(() => but.style.display = 'none', 500)
		block.classList.add('expanded')
	}
	
	document.querySelector('.header__topButtons > span:first-child').addEventListener('click', expand)

	function collapse() {
		let block = document.querySelector('.header__container')
		if(block.classList.contains('expanded')) {
			block.classList.remove('expanded')
			let bot = document.querySelector('.header__bot')
			bot.style.marginTop = `65px`;
		} else {
			block.classList.add('collapsed')
			localStorage.setItem('topCollapsed', 'true')
		}
	}

	document.querySelector('.header__topButtons > span:last-child').addEventListener('click', collapse)

	function deleteTopHeader() {
		let topHeader = document.querySelector('.header__container')
		localStorage.setItem('topDeleted', 'true')

		topHeader.classList.add('deleted')
	}

	document.querySelector('.header__topButtonsHidden > span:last-child').addEventListener('click', deleteTopHeader)

	function expandAgain() {
		let block = document.querySelector('.header__container')
		block.classList.remove('collapsed')
		localStorage.removeItem('topCollapsed')

		setTimeout(expand, 200)
	}

	document.querySelector('.header__topButtonsHidden > span:first-child').addEventListener('click', expandAgain)

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
	toggler.addEventListener('click', menuToggle)

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
})
