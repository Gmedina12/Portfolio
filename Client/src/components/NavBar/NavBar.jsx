import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {

    const location = useLocation().pathname

    return(
        <div>
            <Link to='/Aboutme'>
                <button>About me 👩‍💻</button>
            </Link>
            <Link to='/Contactme'>
                <button>Contact me 📧</button>
            </Link>
            <Link to='/'>
            {(location === '/')? '': <button>Home 🏠</button>}
            </Link>
        </div>
    )

}