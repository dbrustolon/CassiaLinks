/*function toggleMode () {
  const html = document.documentElement
  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    img.setAttribute("src", "./assets/avatar-dark1.jpg")
  }
}*/

function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.jpg")
  } else {
    // set tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar-dark1.jpg")
  }
}
const alt = document.querySelector("#profile img")
if (html.classList.contains("light")) {
  img.setAttribute(
    "alt",
    "foto de cassia olhando para a esquerda, com oculos de sol e fone de ouvido branco"
  )
} else {
  img.setAttribute(
    "alt",
    "Foto de Cassia Nayara com roupa vermelha, levemente de perfil e sorrindo"
  )
}
