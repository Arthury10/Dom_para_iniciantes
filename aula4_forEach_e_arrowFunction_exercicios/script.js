// Mostre no console cada parágrado do site
const paragrafo = document.querySelectorAll('p')

paragrafo.forEach(function (item, index, array) {
	console.log(item, index, array)
})
console.log('====================')
console.log('====================')
console.log('====================')
///////////ou////////////////
const paragrafo2 = document.querySelectorAll('p')

paragrafo2.forEach(item => {
	console.log(item)
})

// Mostre o texto dos parágrafos no console
paragrafo2.forEach(function (item) {
	console.log(item.innerText)
})

//Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img')

imgs.forEach((item, index) => {
	console.log(item, index)
})

let i = 0
imgs.forEach(() => {
	console.log(i++)
})

imgs.forEach(() => i++)