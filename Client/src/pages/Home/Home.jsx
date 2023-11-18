import { Footer } from '../../components/Footer/Footer.jsx'
import { NavBar } from '../../components/NavBar/NavBar.jsx'
import style from './Home.module.css'
export const Home = () => {

    return (
        <div>
            <NavBar />
            <div className={style.containertitles}>
                <h1 className={style.loader}>Welcome to my portfolio!</h1> <br/>
                <h2 className={style.subtitle}>Hi! 👋 I'm Gina Paola Medina</h2><br/>
            </div>
            <div className={style.containerDescription}>
                <p>
                I'm a full-stack developer with a passion for learning and growth in the tech industry, always ready to embrace new challenges. 👩‍💻💻 <br/><br/>
                While I could label myself a nerd due to my love of technology, I'm specifically a dedicated Financist 📊 and a passionate full-stack developer at heart. Beyond coding, I'm a chess enthusiast ♟️ and an animal lover 😻.
                </p>

            </div>
            <div className={style.quoteOW}>
                <p><i>"Be yourself, the rest of the roles are already taken".</i></p><br/>
                <h5>- Oscar Wilde.</h5>
            </div><br/><br/> 
        </div>
    )

}