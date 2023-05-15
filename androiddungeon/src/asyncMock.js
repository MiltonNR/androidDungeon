const products = [
    {
        id: 1,
        titulo: "The Amazing Spider-Man",
        autor: "Dan Slott",
        precio: 19.99,
        stock: 8,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id01.png"),
        detalle: "El primer comic de Spiderman!"
    },
    {
        id: 2,
        titulo: "Avengers: Endgame",
        autor: "Jason Aaron",
        precio: 24.99,
        stock: 12,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id02.png"),
        detalle: "La batalla final de los Avengers!"
    },
    {
        id: 3,
        titulo: "Batman: Year One",
        autor: "Frank Miller",
        precio: 18.50,
        stock: 6,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id03.png"),
        detalle: "Los inicios de la carrera de Bruce Wayne como Batman y de James Gordon en el Departamento de Policía de Gotham City. La vida de estos dos hombres se entrelaza cuando descubren que son aliados en contra de los poderes corruptos en Gotham City"
    },
    {
        id: 4,
        titulo: "Black Panther",
        autor: "Ta-Nehisi Coates",
        precio: 17.99,
        stock: 10,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id04.png"),
        detalle: "El debut de una nueva y misteriosa estrella"
    },
    {
        id: 5,
        titulo: "Cap. America: Winter Soldier",
        autor: "Ed Brubaker",
        precio: 20.99,
        stock: 15,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id05.png"),
        detalle: "El capitan america se reencuentra con un viejo amigo"
    },
    {
        id: 6,
        titulo: "Daredevil: Born Again",
        autor: "Frank Miller",
        precio: 16.75,
        stock: 9,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id06.png"),
        detalle: "Superando muchas adversidades, Daredevil se abre paso en el mundo de los super heroes"
    },
    {
        id: 7,
        titulo: "Green Lantern: Rebirth",
        autor: "Geoff Johns",
        precio: 14.99,
        stock: 7,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id07.png"),
        detalle: "Rebirth narra y explica el porqué de la transformación de Hal Jordan en Parallax y aparecen muchos personajes: Ganthet, Kilowog, Sinestro, Green Arrow, JLA"
    },
    {
        id: 8,
        titulo: "Iron Man: Extremis",
        autor: "Warren Ellis",
        precio: 22.50,
        stock: 11,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id08.png"),
        detalle: "Futurepharm, empresa centrada en el desarrollo de innovaciones biotecnológicas, acaba de sufrir el robo de su proyecto más prometedor: el Extremis, fruto de los más recientes avances en bioelectricidad y cirugía robótica"
    },
    {
        id: 9,
        titulo: "Superman: Red Son",
        autor: "Mark Millar",
        precio: 19.99,
        stock: 5,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id09.png"),
        detalle: "¿Qué hubiera ocurrido si el bebé Kal-El aterriza en la Unión Soviética y no en Estados Unidos? Esto, convierte a Superman en un icono de los valores soviéticos de la época, tales como el comunismo y el expansionismo."
    },
    {
        id: 10,
        titulo: "Thor: God of Thunder",
        autor: "Jason Aaron",
        precio: 21.50,
        stock: 13,
        categoria: "Cómics (DC/Marvel)",
        imagen: require("./assets/fotosProductos/id10.png"),
        detalle: "Loki ha escapado de Asgard para buscar el Yggdrasil, conocido como el Árbol de los Nueve Reinos. Este árbol tiene el poder del Universo y está escondido en la Tierra. Con la ayuda del dios lobo gigante Fenrir, Loki planea destruir el árbol y replantarlo a su imagen, dándole dominio sobre todas las cosas."
    },
    {
        id: 11,
        titulo: "One Piece, vol 1-23",
        autor: "Eiichiro Oda",
        precio: 499.99,
        stock: 10,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id11.png"),
        detalle: "Un joven llamado Monkey D. Luffy, que inspirado por su amigo pirata Shanks, comienza un viaje para alcanzar su sueño, ser el Rey de los piratas, para lo cual deberá encontrar el tesoro One Piece dejado por el anterior rey de los piratas Gol D. Roger"
    },
    {
        id: 12,
        titulo: "Naruto, vol 28-48",
        autor: "Masashi Kishimoto",
        precio: 499.50,
        stock: 8,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id12.png"),
        detalle: "Es una serie de manga escrita e ilustrada por Masashi Kishimoto. La obra narra la historia de un ninja adolescente llamado Naruto Uzumaki, quien aspira a convertirse en Hokage, líder de su aldea, con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros."
    },
    {
        id: 13,
        titulo: "Attack on Titan, vol 1 - 34",
        autor: "Hajime Isayama",
        precio: 228.90,
        stock: 6,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id13.png"),
        detalle: "La trama gira en torno a Eren Jaeger quien después de perder a su madre a manos de los titanes, decide unirse al «Ejército de las murallas» junto a su hermana adoptiva y su mejor amigo con el objetivo de vengar la muerte de su madre y destruir a los titanes."
    },
    {
        id: 14,
        titulo: "Death Note, vol 1 - 13",
        autor: "Tsugumi Ohba",
        precio: 90.99,
        stock: 12,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id14.png"),
        detalle: "Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes."
    },
    {
        id: 15,
        titulo: "Bleach, vol 1 - 27",
        autor: "Tite Kubo",
        precio: 174.50,
        stock: 15,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id15.png"),
        detalle: "La serie narra las aventuras de un adolescente llamado Ichigo Kurosaki, un estudiante de quince años que tiene la habilidad de interactuar con los espíritus. Una noche, Ichigo se encuentra con una Shinigami (死神, lit. dios de la muerte) llamada Rukia Kuchiki."
    },
    {
        id: 16,
        titulo: "My Hero Academia, vol 1 - 20",
        autor: "Kohei Horikoshi",
        precio: 93.99,
        stock: 9,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id16.png"),
        detalle: "En un mundo donde tener superpoderes es lo más común, nace Izuku Midoriya, un niño sin este don que sueña con ser un superhéroe. La gente con este tipo de habilidades es conocida como 'Quirk' y, debido a no pertenecer a esta clase, Izuku sufre bullying en su escuela por ser diferente."
    },
    {
        id: 17,
        titulo: "Fullmetal Alchemist, Vol 1 - 27",
        autor: "Hiromu Arakawa",
        precio: 172.99,
        stock: 7,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id17.png"),
        detalle: "Los hermanos Edward y Alphonse Elric viven en un mundo donde la magia y la alquimia existen y se pueden practicar. Después de la muerte de su madre, juntos tratarán de resucitarla a través de la alquimia."
    },
    {
        id: 18,
        titulo: "Hunter x Hunter, vol 1 - 27",
        autor: "Yoshihiro Togashi",
        precio: 173.50,
        stock: 11,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id18.png"),
        detalle:"Hunter × Hunter (ハンターハンター Hantā Hantā) es una serie de manga escrita e ilustrada por Yoshihiro Togashi. La historia tiene como protagonista a Gon Freecss, un niño de doce años que desea encontrar a su padre a toda costa, por lo que decide convertirse en «cazador», justo como él, y de alguna forma hallar su paradero."
    },
    {
        id: 19,
        titulo: "Tokyo Ghoul, Vol - 30",
        autor: "Sui Ishida",
        precio: 211.99,
        stock: 5,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id19.png"),
        detalle: "Un estudiante universitario es atacado por un demonio que se alimenta de carne humana. Más tarde recibe un trasplante de un órgano de la criatura, convirtiéndose parcialmente en un monstruo."
    },
    {
        id: 20,
        titulo: "Demon Slayer, vol 1 - 23",
        autor: "Koyoharu Gotouge",
        precio: 104.50,
        stock: 13,
        categoria: "Mangas (Japonesas)",
        imagen: require("./assets/fotosProductos/id20.png"),
        detalle: "Sigue a Kamado Tanjiro, quien se ve obligado a convertirse en un cazador de demonios cuando su familia es brutalmente atacada por uno y solamente sobrevive su hermana Nezuko. Sin embargo, ella se transforma en demonio y Tanjiro inicia un viaje para encontrarle una cura"
    },
    {
        id: 21,
        titulo: "Figura Batman",
        autor: "DC Comics",
        precio: 29.99,
        stock: 10,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id21.png"),
        detalle: "Figura de 25 cm del Superheroe de Gotham"
    },
    {
        id: 22,
        titulo: "Figura Iron Man",
        autor: "Marvel",
        precio: 34.99,
        stock: 8,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id22.png"),
        detalle: "Figura de 25 cm del Superheroe filantropo"
    },
    {
        id: 23,
        titulo: "Figura Wonder Woman",
        autor: "DC Comics",
        precio: 27.50,
        stock: 6,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id23.png"),
        detalle: "Figura de 25 cm de la Superheroína número 1"
    },
    {
        id: 24,
        titulo: "Figura Spider-Man",
        autor: "Marvel",
        precio: 31.99,
        stock: 12,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id24.png"),
        detalle: "Figura de 25 cm del amigable vecino de Queens"
    },
    {
        id: 25,
        titulo: "Figura Superman",
        autor: "DC Comics",
        precio: 28.50,
        stock: 15,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id25.png"),
        detalle: "Figura de 25 cm del Superheroe de Metrópolis"
    },
    {
        id: 26,
        titulo: "Figura Capitán America",
        autor: "Marvel",
        precio: 32.99,
        stock: 9,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id26.png"),
        detalle: "Figura de 25 cm del super capitán"
    },
    {
        id: 27,
        titulo: "Figura Joker",
        autor: "DC Comics",
        precio: 26.99,
        stock: 7,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id27.png"),
        detalle: "Figura de 25 cm del desquiciado favorito de todos"
    },
    {
        id: 28,
        titulo: "Figura Thor",
        autor: "Marvel",
        precio: 29.50,
        stock: 11,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id28.png"),
        detalle: "Figura de 25 cm del dios del trueno"
    },
    {
        id: 29,
        titulo: "Figura Harley Quinn",
        autor: "DC Comics",
        precio: 25.99,
        stock: 5,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id29.png"),
        detalle: "Figura de 25 cm de la desquiciada favorita de todos"
    },
    {
        id: 30,
        titulo: "Figura Hulk",
        autor: "Marvel",
        precio: 31.50,
        stock: 13,
        categoria: "Figuras Clasicas (de comics y series occidentales)",
        imagen: require("./assets/fotosProductos/id30.png"),
        detalle: "Figura de 25 cm del Superheroe verde"
    },
    {
        id: 31,
        titulo: "Figura Monkey D. Luffy",
        autor: "One Piece",
        precio: 29.99,
        stock: 10,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id31.png")
    },
    {
        id: 32,
        titulo: "Figura Naruto Uzumaki",
        autor: "Naruto",
        precio: 34.99,
        stock: 8,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id32.png"),
        detalle: "Figura de 25 cm del pequeño fan del ramen"
    },
    {
        id: 33,
        titulo: "Figura Eren Yeager",
        autor: "Attack on Titan",
        precio: 27.50,
        stock: 6,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id33.png"),
        detalle: "Figura de 25 cm del Superheroe de Attack on Titan"
    },
    {
        id: 34,
        titulo: "Figura Light Yagami",
        autor: "Death Note",
        precio: 31.99,
        stock: 12,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id34.png"),
        detalle: "Figura de 25 cm del personaje principal de la peor serie de la galaxia"
    },
    {
        id: 35,
        titulo: "Figura Ichigo Kurosaki",
        autor: "Bleach",
        precio: 28.50,
        stock: 15,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id35.png"),
        detalle: "Figura de 25 cm del Superheroe de Bleach"
    },
    {
        id: 36,
        titulo: "Figura Izuku Midoriya",
        autor: "My Hero Academia",
        precio: 32.99,
        stock: 9,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id36.png"),
        detalle: "Figura de 25 cm del Superheroe de My Hero Academia"
    },
    {
        id: 37,
        titulo: "Figura Edward Elric",
        autor: "Fullmetal Alchemist",
        precio: 26.99,
        stock: 7,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id37.png"),
        detalle: "Figura de 25 cm del Superheroe de FullMetal Alchemist"
    },
    {
        id: 38,
        titulo: "Figura Gon Freecss",
        autor: "Hunter x Hunter",
        precio: 29.50,
        stock: 11,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id38.png"),
        detalle: "Figura de 25 cm del Superheroe de Hunter x Hunter"
    },
    {
        id: 39,
        titulo: "Figura Ken Kaneki",
        autor: "Tokyo Ghoul",
        precio: 25.99,
        stock: 5,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id39.png"),
        detalle: "Figura de 25 cm del Superheroe de TokyoGoul"
    },
    {
        id: 40,
        titulo: "Figura Tanjiro Kamado",
        autor: "Demon Slayer",
        precio: 31.50,
        stock: 13,
        categoria: "Figuras Japonesas",
        imagen: require("./assets/fotosProductos/id40.png"),
        detalle: "Si llegaste acá notarás que esta base de datos fue hecha a mano. Saludos pequeño Androide"
    },
    {
        id: 41,
        titulo: "Babe Ruth",
        autor: "New York Yankees",
        precio: 19.99,
        stock: 8,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id41.png"),
        detalle: "George Herman Ruth Jr., mejor conocido como Babe Ruth, fue un legendario jugador de béisbol que jugó para los New York Yankees. Fue uno de los jugadores más destacados en la historia del béisbol, conocido por sus impresionantes habilidades como bateador y su récord de jonrones. Su impacto en el deporte y su legado perduran hasta el día de hoy."
    },
    {
        id: 42,
        titulo: "Hank Aaron",
        autor: "Milwaukee Braves",
        precio: 24.99,
        stock: 5,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id42.png"),
        detalle: "Henry Louis Aaron, conocido como Hank Aaron, fue un destacado jugador de béisbol que jugó para los Milwaukee Braves. Es considerado uno de los mejores bateadores en la historia del béisbol y ostentó el récord de jonrones durante muchos años. Su legado en el deporte es reconocido y admirado."
    },
    {
        id: 43,
        titulo: "Jackie Robinson",
        autor: "Brooklyn Dodgers",
        precio: 29.99,
        stock: 3,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id43.png"),
        detalle: "Jack Roosevelt Robinson, conocido como Jackie Robinson, fue un influyente jugador de béisbol que rompió la barrera racial al convertirse en el primer jugador afroamericano en las Grandes Ligas de Béisbol. Jugó para los Brooklyn Dodgers y su valentía y habilidades en el campo abrieron el camino para la igualdad en el deporte."
    },
    {
        id: 44,
        titulo: "Mickey Mantle",
        autor: "New York Yankees",
        precio: 21.99,
        stock: 6,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id44.png"),
        detalle: "Mickey Mantle fue un legendario jugador de béisbol que pasó toda su carrera en los New York Yankees. Fue un bateador poderoso y un gran líder en el campo. Mantle es considerado uno de los mejores jugadores de la era moderna del béisbol y su legado perdura en la historia del deporte."
    }, 
    {
        id: 45,
        titulo: "Cy Young",
        autor: "Boston Red Sox",
        precio: 32.99,
        stock: 2,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id45.png"),
        detalle: "Denton True 'Cy' Young fue un destacado lanzador de béisbol que jugó principalmente para los Boston Red Sox. Es considerado uno de los mejores lanzadores de todos los tiempos y su récord de 511 victorias sigue siendo el más alto en la historia del béisbol."
    },
    {
        id: 46,
        titulo: "Willie Mays",
        autor: "San Francisco Giants",
        precio: 27.99,
        stock: 4,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id46.png"),
        detalle: "Willie Mays, apodado 'The Say Hey Kid', fue un destacado jugador de béisbol que jugó principalmente para los San Francisco Giants. Fue conocido por su habilidad excepcional en el campo, su poder de bateo y su velocidad. Mays es considerado uno de los mejores jugadores en la historia del béisbol."
    },
    {
        id: 47,
        titulo: "Roberto Clemente",
        autor: "Pittsburgh Pirates",
        precio: 35.99,
        stock: 3,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id47.png"),
        detalle: "Roberto Clemente fue un destacado jugador de béisbol que jugó toda su carrera para los Pittsburgh Pirates. Fue un jardinero excepcional, conocido por su defensa y habilidades ofensivas. Clemente también fue reconocido por su labor humanitaria fuera del campo. Su legado sigue siendo recordado y admirado."
    },
    {
        id: 48,
        titulo: "Sandy Koufax",
        autor: "Los Angeles Dodgers",
        precio: 31.99,
        stock: 5,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id48.png"),
        detalle: "Sandy Koufax fue un talentoso lanzador de béisbol que jugó toda su carrera para los Los Angeles Dodgers. Koufax es conocido por su dominio en el montículo y sus impresionantes logros, incluyendo múltiples premios Cy Young y juegos sin hits. Es considerado uno de los mejores lanzadores en la historia del béisbol."
    }, 
    {
        id: 49,
        titulo: "Lou Gehrig",
        autor: "New York Yankees",
        precio: 29.99,
        stock: 4,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id49.png"),
        detalle: "Lou Gehrig, apodado 'El Caballo de Hierro', fue un destacado jugador de béisbol que jugó toda su carrera para los New York Yankees. Fue conocido por su poder de bateo y su durabilidad en el campo. Gehrig es recordado por su notable racha de juegos consecutivos y su lucha contra la enfermedad de Lou Gehrig."
    },
    {
        id: 50,
        titulo: "Mariano Rivera",
        autor: "New York Yankees",
        precio: 34.99,
        stock: 6,
        categoria: "Tarjetas históricas de béisbol",
        imagen: require("./assets/fotosProductos/id50.png"),
        detalle: "Mariano Rivera, apodado 'Mo', fue un legendario lanzador de béisbol que jugó toda su carrera para los New York Yankees. Es considerado uno de los mejores cerradores en la historia del béisbol, conocido por su dominio en el montículo y su lanzamiento característico, la 'cortina de humo'. Rivera fue clave en los éxitos de los Yankees y es un icono del equipo."
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
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}