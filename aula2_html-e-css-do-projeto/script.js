const teste = document.querySelector('#menu')
const scrollEvent = window

function clicou() {
	teste.classList.toggle('menu')
	console.log('clicou')
}

teste.addEventListener('click', clicou)

scrollEvent.addEventListener('scroll', clicou)
