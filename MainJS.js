const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  // para ("tipo_variavel" "nomeVariavelQualquer" of "Referencia_De_UmaVariavel_Exisnte_Do_MesmoTipo")
  element.addEventListener(
    'click', // o EVENTO DESEJADO
    function () {
      // declarando função sem nome
      nav.classList.toggle('show')
    }
  )
}

// quando clicar em qualquer item linkado do menu, feche o menu
const linksMenu = document.querySelectorAll('#header nav .menu ul li a')

for (const links of linksMenu) {
  links.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
