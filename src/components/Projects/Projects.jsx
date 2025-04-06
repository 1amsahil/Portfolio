import musicin from "../../assets/musicin.png"
import foody from "../../assets/foody.jpg"
import Projectcard from "../../common/Projectcard/Projectcard"
import Heading from "../../common/Heading/Heading"
import styles from "./Projects.module.css"

export default function Projects()
{
    return <>
            <div className={styles['project']} >
                <hr />
                    <Heading headingname={"PROJECTS"} />
                <div className={styles['project-container']}>
                   <Projectcard src={foody} title={"Foody"} para={"Food Web-App"} link={"https://thefoody.vercel.app/"} />
                   {/* <Projectcard src={musicin} title={"JobTrap"} para={"Job Web-App"} link={"https://musicin.onrender.com/"} /> */}
                   <Projectcard src={musicin} title={"MusicIn"} para={"Music Streaming Web-App"} link={"https://musicin.onrender.com/"} />
                   {/* <Projectcard src={musicin} title={"MusicIn"} para={"Music Streaming Web-App"} link={"https://musicin.onrender.com/"} /> */}
                </div>
            </div>
    </>
}