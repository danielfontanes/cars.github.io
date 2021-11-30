//DATABASE
const cars = [
    {
        "marca":"Audi",
        "modelo": "A1",
        img: "a1"
    },
    {
        "marca":"Audi",
        "modelo": "A3",
        img: "a3"
    },
    {
        "marca":"Audi",
        "modelo": "A4",
        img: "a4"
    }
]


//PRINT DATABASE
function createCarCard(car){
    contenedor = document.createElement("div")

    marca = document.createElement("p")
    contenido = document.createTextNode(`Marca: ${car.marca}`)
    marca.append(contenido)
    contenedor.append(marca)

    modelo = document.createElement("p")
    contenido = document.createTextNode(`Modelo: ${car.modelo}`)
    modelo.append(contenido)
    contenedor.append(modelo)

    imagen = document.createElement("img")
    imagen.setAttribute("src",`img/${car.img}.avif`)
    contenedor.append(imagen)

    contendedoCoches = document.getElementById("contenedorCoches")
    contendedoCoches.append(contenedor)
} 

cars.map(n => createCarCard(n))

