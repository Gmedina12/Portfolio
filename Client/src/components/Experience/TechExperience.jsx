import style from './TechExperience.module.css'
export const TechExperience = () => {
    return (
        <div className={style.containerTech}>
            <div className={style.gradientTextExperience}>
                <h2>Tech Experience</h2>
            </div>

            <div className={style.container}>
                <div className={style.expTech}>
                    <p>
                        <h4>Mercado de Residuos</h4>
                    </p>
                    <p>Full-Stack Developer Sept 2023 - Oct 2023</p>
                    <ul>
                        <li>Development of a web application for a Startup, Waste Market (MDR).</li>
                        <li>Backend: Apollo GraphQL, Git, PostgreSQL, Sequelize.js, Node.js, JSON Web Token (JWT)</li>
                        <li>Frontend: Apollo Client, React.js, JavaScript, HTML5</li>
                        <li>Version Control: Git and Github - JIRA for tickets, issues, and planning</li>
                        <li>Test: Manual Blackbox testing</li>
                        <li>Documentation Drafting</li>
                    </ul>
                </div>

                <div className={style.techUsed}>
                    <h3 align="left">Languages and Tools:</h3>
                    <p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a> <a href="https://www.figma.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40" /> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a> <a href="https://graphql.org" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg" alt="graphql" width="40" height="40" /> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a> <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40" /> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40" /></a> <a href="https://www.apollographql.com/"><img src="https://cdn.simpleicons.org/apollographql/311C87" height="40" alt="apollographql logo" />
                    </a> </p>
                    <br/>

                    <div>
                        <a href="https://www.youtube.com/watch?v=ZBi1--mW4GA">
                            <button className={style.playButton}>Play on YouTube ▶</button>
                        </a>
                    </div>
                    
                </div>
            </div>

            <div className={style.container}>
                <div className={style.expTech}>
                    <p>
                        <h4>HENRY </h4>
                    </p>
                    <p> Teaching Assistant (TA) Ago 2023 - Oct 2023</p>
                    <ul>
                        <li>Coordinate a group of new joining students throughout the whole bootcamp experience.</li>
                        <li>Guide students in the first steps of the course and clarify their doubts.</li>
                        <li>Provide assistance in solving exercises and encourage group teamwork (Pair Programming).</li>
                        <li>Promote collaboration and build community within the students.</li>
                    </ul>
                </div>

                <div className={style.techUsed}>
                    <a href="https://drive.google.com/file/d/17JswqTAe4NiU0kfe0q0HXHCVA92GtoSK/view?usp=drive_link">
                        <button className={style.playButton}>View Certificate 🧾</button>
                    </a>
                </div>
            </div>


        </div>
    )
}

