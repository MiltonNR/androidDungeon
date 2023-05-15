import afiche from "./assets/afiche.png"
import CardWidget from "../CardWidget/CartWidget"
import "./assets/stylesNB.css"
import { NavLink, Link } from "react-router-dom"



const NavBar = () => {
    return (

        <nav>
            <Link to="/">
            <img src={afiche}  alt="The Android's Dungeon and Baseball Card Shop"></img>
            </Link>

            <div className="Categories">
                <NavLink to={"/categoria/Comics"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Comícs</NavLink>
                <NavLink to={"/categoria/Manga"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Manga</NavLink>
                <NavLink to={"/categoria/FigurasClasicas"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Figuras Clasicas</NavLink>
                <NavLink to={"/categoria/FigurasJaponesas"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Figuras Japonesas</NavLink>
                <NavLink to={"/categoria/Tarjetas"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Tarjetas de Baseball</NavLink>
            </div>
            <CardWidget/>
        </nav>
        
        
    )
}

export default NavBar

/*



/*        <nav>
            <Link to="/">
            <img src={afiche}  alt="The Android's Dungeon and Baseball Card Shop"></img>
            </Link>

            <div className="Categories">
                <NavLink to={"/categoria/Comics"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Comícs</NavLink>
                <NavLink to={"/categoria/Manga"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Comícs</NavLink>
                <NavLink to={"/categoria/FigurasClasicas"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Comícs</NavLink>
                <NavLink to={"/categoria/FigurasJaponesas"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Comícs</NavLink>
                <NavLink to={"/categoria/Tarjetas"} className={({isActive})=> isActive ? "ActiveOption" : "Option "}>Comícs</NavLink>
            </div>

            <CardWidget/>
        </nav>*/