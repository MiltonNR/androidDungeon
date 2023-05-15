import afiche from "./assets/afiche.png"
import CardWidget from "../CardWidget/CartWidget"
import "./assets/stylesNB.css"
//<CardWidget/>


const NavBar = () => {
    return (
        <nav>
            <img src={afiche}  alt="The Android's Dungeon and Baseball Card Shop"></img>
            <div>
                <button>Cómics</button>
                <button>Mangas</button>
                <button>Figuras Japonesas</button>
                <button>Figuras Clásicas</button>
                <button>Cards</button>
            </div>
            <CardWidget/>
        </nav>
        
        
    )
}

export default NavBar