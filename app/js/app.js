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


})
