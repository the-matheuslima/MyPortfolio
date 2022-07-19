import React from "react";
import Card from "../../components/cards";
import taxi from "../../assets/gif/taxi-delivery.gif"
import Icons from '../../mockData/index'
import './style.scss';
import FormContact from "../../components/form-contact";
import { motion } from "framer-motion"

function About() {
    return (
        <motion.main
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 1, scale: 1 }}

            className="about">
            <section className="about__intro">
                <div className="about__intro-bg">

                    <div className="about__info">
                        <h2><span className="crisp">About</span> Me</h2>
                        <blockquote >

                            <p> Estou sempre em busca de novos conhecimentos. Estudo programação web desde 2021, desde então, venho criando projetos pessoais e profissionais, nos quais acabo pondo em prática todos os conhecimentos que adquiro. Sou uma pessoa bem flexível e fácil de se lidar, adoro trabalhos em grupos e de aprender coisas novas com os outros.</p>

                            <p>Estou sempre tendo em mente as melhores práticas para escrever códigos mais reutilizáveis e de fácil manutenção.Atualmente, estou focando meus estudos linguagem TypeScript, em conjunto com a biblioteca ReactJs.</p>
                        </blockquote>
                    </div>

                    <div className="about__gif">
                        <img src={taxi} alt="" />
                    </div>
                </div>

            </section>

            <section className="about__skills">
                <h2><span className="crisp">Minhas</span> Habilidades</h2>

                <div className="about__skills-cards">
                    {Icons.IconsSkills.map((skills, i) => (
                        <Card iconsSkills={skills.imgUrl} name={skills.name} key={i} />
                    ))}
                </div>
            </section>

            <section className="about__tools">
                <h2><span className="crisp">Feramentas </span> que eu uso</h2>
                <div className="about__tools-cards">
                    {Icons.IconsTools.map((skills, i) => (
                        <Card iconsSkills={skills.imgUrl} name={skills.name} key={i} />
                    ))}
                </div>
            </section>

            <FormContact />
        </motion.main>
    );
}

export default About;
