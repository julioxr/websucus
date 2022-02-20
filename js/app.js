const objetoSuculentas = async () => {
    const response = await fetch('http://127.0.0.1:5500/sucus.json')
    const data = await response.json()
    const suculentas = data

    const textBox = document.querySelector('#textBox')

    //en lugar del forEach hace un find - Tarea para hoy 15/02
    // data.forEach(suculenta => {
    //     console.log(suculenta);
    //     textBox.innerHTML = `<h3>${suculenta.name}</h3>`
    //     textBox.innerHTML = `<p>${suculenta.info}</p>`
    // });

    const nombreSucu = suculentas.find((suculenta) => suculenta.id)

    console.log(nombreSucu)



    // suculentas.forEach(suculenta => {
    //     textBox.innerHTML = `<p>${suculenta.info}</p>`

    // })
}
objetoSuculentas()


const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");
//mostrar menu
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

