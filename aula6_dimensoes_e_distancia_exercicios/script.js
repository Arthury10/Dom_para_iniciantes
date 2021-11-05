// Verifique a distância da primeira imagem
// em relação ao topo da página
const selectImg = document.querySelector('img')

console.log(`A distância da imagem do topo é ${selectImg.offsetTop}`)

// Retorne a soma da largura de todas as imagens
function somaImagens() {
	const selectImgWidth = document.querySelectorAll('img')
	let soma = 0
	selectImgWidth.forEach(img => {
		soma += img.offsetWidth
		console.log(`A largura da imagem é ${img.width}`)
	})
	console.log(`A soma das larguras é ${soma}`)
}

window.onload = function () {
	somaImagens()
}
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a')
links.forEach(link => {
	const linkWidth = link.offsetWidth
	const linkHeight = link.offsetHeight
	if (linkWidth <= 48 && linkHeight <= 48) {
		console.log(`${link} Possui boa acessibilidade`)
	} else {
		console.log(`${link} Não possui boa acessibilidade`)
	}
})

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const selectMenu = document.querySelector('nav')

window.addEventListener('resize', () => {
	if (window.innerWidth < 720) {
		selectMenu.classList.add('menu-mobile')
		console.log('O menu está no modo mobile')
	} else {
		selectMenu.classList.remove('menu-mobile')
		console.log('O menu está no modo desktop')
	}
})

//////////////////////OUUU///////////////

const browserSmall = window.matchMedia('(max-width: 720px)')

if (browserSmall) {
	const menu = document.querySelector('nav')
	menu.classList.add('menu-mobile')
}
