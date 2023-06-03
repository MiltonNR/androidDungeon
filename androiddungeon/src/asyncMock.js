const products = [
    {
        id: 1,
        titulo: "The Amazing Spider-Man",
        autor: "Dan Slott",
        precio: 19.99,
        stock: 8,
        categoria: "Comics",
        imagen: require("./assets/fotosProductos/id01.png"),
        detalle: "El primer comic de Spiderman!"
    },
    {
        id: 2,
        titulo: "Avengers: Endgame",
        autor: "Jason Aaron",
        precio: 24.99,
        stock: 12,
        categoria: "Comics",
        imagen: require("./assets/fotosProductos/id02.png"),
        detalle: "La batalla final de los Avengers!"
    },
    {
        id: 3,
        titulo: "Attack on Titan, vol 1 - 34",
        autor: "Hajime Isayama",
        precio: 228.90,
        stock: 6,
        categoria: "Manga",
        imagen: require("./assets/fotosProductos/id13.png"),
        detalle: "La trama gira en torno a Eren Jaeger quien después de perder a su madre a manos de los titanes, decide unirse al «Ejército de las murallas» junto a su hermana adoptiva y su mejor amigo con el objetivo de vengar la muerte de su madre y destruir a los titanes."
    },
    {
        id: 4,
        titulo: "Death Note, vol 1 - 13",
        autor: "Tsugumi Ohba",
        precio: 90.99,
        stock: 12,
        categoria: "Manga",
        imagen: require("./assets/fotosProductos/id14.png"),
        detalle: "Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes."
    },
    {
        id: 5,
        titulo: "Figura Iron Man",
        autor: "Marvel",
        precio: 34.99,
        stock: 8,
        categoria: "FigurasClasicas",
        imagen: require("./assets/fotosProductos/id22.png"),
        detalle: "Figura de 25 cm del Superheroe filantropo"
    },
    {
        id: 6,
        titulo: "Figura Wonder Woman",
        autor: "DC Comics",
        precio: 27.50,
        stock: 6,
        categoria: "FigurasClasicas",
        imagen: require("./assets/fotosProductos/id23.png"),
        detalle: "Figura de 25 cm de la Superheroína número 1"
    },
    {
        id: 7,
        titulo: "Figura Naruto Uzumaki",
        autor: "Naruto",
        precio: 34.99,
        stock: 8,
        categoria: "FigurasJaponesas",
        imagen: require("./assets/fotosProductos/id32.png"),
        detalle: "Figura de 25 cm del pequeño fan del ramen"
    },
    {
        id: 8,
        titulo: "Figura Eren Yeager",
        autor: "Attack on Titan",
        precio: 27.50,
        stock: 6,
        categoria: "FigurasJaponesas",
        imagen: require("./assets/fotosProductos/id33.png"),
        detalle: "Figura de 25 cm del Superheroe de Attack on Titan"
    },
    {
        id: 11,
        titulo: "Babe Ruth",
        autor: "New York Yankees",
        precio: 19.99,
        stock: 8,
        categoria: "Tarjetas",
        imagen: require("./assets/fotosProductos/id41.png"),
        detalle: "George Herman Ruth Jr., mejor conocido como Babe Ruth, fue un legendario jugador de béisbol que jugó para los New York Yankees. Fue uno de los jugadores más destacados en la historia del béisbol, conocido por sus impresionantes habilidades como bateador y su récord de jonrones. Su impacto en el deporte y su legado perduran hasta el día de hoy."
    },
    {
        id: 12,
        titulo: "Hank Aaron",
        autor: "Milwaukee Braves",
        precio: 24.99,
        stock: 5,
        categoria: "Tarjetas",
        imagen: require("./assets/fotosProductos/id42.png"),
        detalle: "Henry Louis Aaron, conocido como Hank Aaron, fue un destacado jugador de béisbol que jugó para los Milwaukee Braves. Es considerado uno de los mejores bateadores en la historia del béisbol y ostentó el récord de jonrones durante muchos años. Su legado en el deporte es reconocido y admirado."
    },

];


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products)
        },500)
    })
}

export const getProductsById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

export const getProductsByCategoria = (productCategoria) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.categoria === productCategoria))
        }, 500)
    })
}