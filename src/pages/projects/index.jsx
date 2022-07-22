import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../service/firebase-config"
import { TiSocialGithub, TiAttachment } from "react-icons/ti";
import { motion } from "framer-motion"

import './style.scss'

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getDatas = async () => {
            const querySnapshot = await getDocs(collection(db, "projects"));
            setProjects(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getDatas()
    }, []);

    return (
        <motion.main
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, scale: 0 }}
            className="projects"
        >

            <section className="projects__content">
                <h2 className="title mgb-1">Meus <span className="crisp">Projetos</span> mais Recentes</h2>

                <motion.ul
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    exit={{ opacity: 1, scale: 1 }}

                    className="projects__list">
                    {projects.map((el) => (
                        <li className="projects__list-item" key={el.id}>
                            <div className="links">
                                <a href={el.github} target='_blank' rel="external"><span className="crisp"><TiSocialGithub /></span></a>
                                <div className="image">
                                    <img src={el.image} alt="" />
                                </div>

                                <a href={el.link} target='_blank' rel="external"><TiAttachment /></a>
                            </div>

                            <h3>{el.name} | <span className="crisp">{el.technologies.join(' | ')}</span></h3>
                            <p>{el.about}</p>
                        </li>
                    ))}
                </motion.ul>
            </section>
        </motion.main>
    )
}

export default Projects;