// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
	event.preventDefault()
	linksInternos.forEach(link => {
		link.classList.remove('ativo')
	})
	event.currentTarget.classList.add('ativo')
}

linksInternos.forEach(link => {
	link.addEventListener('click', handleLink)
})

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementos = document.querySelectorAll('body *')
elementos.forEach(elemento => {
	elemento.addEventListener('click', event => {
		console.log(event.target)
	})
})

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
// const elementos1 = document.querySelectorAll('body *')
// elementos1.forEach(elementos1 => {
// 	elementos1.addEventListener('click', event => {
// 		event.target.remove()
// 	})
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

function handleText(event) {
	if (event.key === 't') {
		document.documentElement.classList.toggle('textomaior')
	}
}
window.addEventListener('keydown', handleText)
// function handleText(event) {
// 	if (event.key === '=') {
// 		texto.forEach(texto => {
// 			texto.style.fontSize = '40px'
// 		})
// 	} else if (event.key === '-') {
// 		texto.forEach(texto => {
// 			texto.style.fontSize = '20px'
// 		})
// 	} else {
// 		return false
// 	}
// }
