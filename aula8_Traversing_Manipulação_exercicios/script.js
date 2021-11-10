// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const cloneMenu = menu.cloneNode(true)
copy.appendChild(cloneMenu)
// Selecione o primeiro DT da dl de Faq
const dl = document.querySelector('.faq-lista')
console.log(dl.firstElementChild)

// Selecione o DD referente ao primeiro DT
const dt = dl.firstElementChild

console.log(dt.nextElementSibling)

// Substitua o conteúdo html de .faq pelo de .animais
const body = document.querySelector('body')
const faq = document.querySelector('#faq')
const animais = document.querySelector('#animais')

body.insertBefore(faq, animais)
