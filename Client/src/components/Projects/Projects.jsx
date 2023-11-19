import style from './Projects.module.css'
export const Projects = () => {
    return (
        <div className={style.container}>
            <div className={style.gradientProjects}>
                <h2>Projects</h2>
            </div>

            <div className={style.containerProject}>
                <p className={style.projects}>
                    <h4>Countries - Academic Project on HENRY</h4>
                    <ul>
                        <li>SPA: Rendering countries flags and basic information like, continent, population and capital.</li>
                        <li>CRUD touristic activities.</li>
                    </ul>
                </p>
                <div className={style.techUsedInProjects}>
                    <h3 align="left">Languages and Tools:</h3>
                    <p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" /> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a> <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40" /> </a> </p> <br/>
                    <div>
                    <label>Github Repo: </label>
                <a href="https://github.com/Gmedina12/PI-Countries-main"><button className={style.button}><img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/github.png" alt="github"/></button></a>
            </div>
                </div>
            </div>
           
        <div className={style.containerProject}>
        <p className={style.projects}>
                <h4>Portfolio</h4>
                <ul>
                    <li>Mini apps: Currency converter with Rest API consumption.</li>
                    <li>Unit of measurement converter with data query in a local json (made by me).</li>
                    <li>Contact form with automatic confirmation email sending.</li>
                    <li>Form with message toolbar</li>
                </ul>
                
            </p>
            <div className={style.techUsedInProjects}>
                <h3 align="left">Languages and Tools:</h3>
                <p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a> <a href="https://graphql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40" /> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a> <a href="https://www.apollographql.com/"><img src="https://cdn.simpleicons.org/apollographql/311C87" height="40" alt="apollographql logo" /> </a> 
                <div><br/>
                    <label>Github Repo: </label>
                <a href="https://github.com/Gmedina12/Portfolio"><button className={style.button}><img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/github.png" alt="github"/></button></a>
            </div>
                </p>
            </div><br/><br/>
        </div>

        </div>
    )
}
