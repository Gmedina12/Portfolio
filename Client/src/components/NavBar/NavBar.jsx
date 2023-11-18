import { Link, useLocation } from "react-router-dom";
import style from './NavBar.module.css'

export const NavBar = () => {

    const location = useLocation().pathname

    return(
        <div className={style.bgNavbar}>
            <Link to='/Aboutme'>
            {(location === '/Aboutme')? '':<button className={style.navButtons}>About me</button>}
            </Link>
            <Link to='/Experience'>
            {(location === '/Experience')? '':<button className={style.navButtons}>Experience</button>}
            </Link>
            <Link to='/Contactme'>
            {(location === '/Contactme')? '':<button className={style.navButtons}>Contact me</button>}
            </Link>
            <Link to='/'>
            {(location === '/')? '': <button className={style.navButtons}>Home </button>}
            </Link>
        </div>
    )

}