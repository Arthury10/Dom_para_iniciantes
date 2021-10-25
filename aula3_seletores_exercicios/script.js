// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img')
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const img = document.querySelectorAll('img[src^="img/imagem"]')
console.log(img)

// Selecione todos os links internos (onde o href começa com #)
const href = document.querySelectorAll('[href^="#"]')
console.log(href)

// Selecione o primeiro h2 dentro de .animais-descricao
const titulo = document.querySelector('.animais-descricao h2')
const tituloh2 = document.querySelector('h2')
console.log(titulo)
console.log(tituloh2)

// Selecione o último p do site
const paragrafo = document.querySelectorAll('p')
console.log(paragrafo[paragrafo.length - +1])
