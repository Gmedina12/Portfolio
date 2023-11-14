import { NavBar } from '../../components/NavBar/NavBar.jsx'
import style from './Home.module.css'
export const Home = () => {

    return (
        <div>
            <NavBar />
            <div className={style.containertitles}>
                <h1 className={style.gradientTextTitle}>Welcome to my portfolio!</h1>
                <h2>Hi! 👋 I'm Gina Paola Medina</h2>
            </div>
            <div className={style.containerDescription}>
                <p>
                    I'm a full-stack developer with a passion for learning and growing in the tech industry. Always eager to take on new challenges.
                    I can describe to myself like a nerd 📚 But being specific,
                    I'm literally a lovely Financist 💰🧾, passionate Fullstack developer💜💻n a crazy chess and animal lover 🐕♟️🥰
                </p>

            </div>
            <div className={style.quoteOW}>
                <p><i>"Be yourself, the rest of the roles are already taken".</i></p>
                <h5>- Oscar Wilde.</h5>
            </div>
        </div>
    )

}