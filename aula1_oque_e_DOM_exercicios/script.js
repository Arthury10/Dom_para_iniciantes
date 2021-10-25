// Retorne o url da página atual utilizando o objeto window
const href =
	'http://127.0.0.1:5500/JavaScript_Dom_para_iniciantes/Aula1_oque_e_DOM_exercicios/'

console.log(href)

//////////////ou//////////////////
const hrefPagina = window.location.href
console.log(hrefPagina)
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const titulo = document.querySelector('.titulo-principal')

function clicou() {
	console.log('click')
}

titulo.addEventListener('click', clicou)

// Retorne a linguagem do navegador
console.log(window.navigator.language)

// Retorne a largura da janela
console.log(window.innerWidth)
