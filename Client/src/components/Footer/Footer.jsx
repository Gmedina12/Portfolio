import style from './Footer.module.css'
export const Footer = () => {
    return (
        <footer>
            <div className={style.bgFooter}>
            <p className={style.footerText}>Connect with me: &nbsp;</p>
                <a href="https://twitter.com/Gmedinabelt19" target="_blank"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/EBEBEB/twitterx--v1.png" alt="Twitterx" /></a>&nbsp;

                <a href="https://www.linkedin.com/in/ginapaolamedina/" target="_blank"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/EBEBEB/linkedin.png" alt="LinkedIn" /></a>&nbsp;

                <a href="https://www.instagram.com/gmedinabelt19/" target="_blank"><img width="30" height="30" src="https://img.icons8.com/ios/50/EBEBEB/instagram-new--v1.png" alt="Instagram" /></a>&nbsp;

                <a href="https://github.com/Gmedina12" target="_blank"><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/EBEBEB/github.png" alt="Github" /></a>
            </div>
        </footer>
    )
}