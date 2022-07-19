import "./style.scss";
import { GoMarkGithub } from "react-icons/go";
import { TiSocialLinkedin, TiArrowDown, TiLocation } from "react-icons/ti";
import Programming from "../../assets/gif/programming.gif"
import { motion } from "framer-motion"

const Home = () => {
    return (
        <motion.main
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 1, scale: 1 }}
            className="home">
            <section className="home__container">
                <span className="crisp home__hi">Olá, Sou o</span>
                <h1 className="home__name">Matheus Lima</h1>
                <p className="crisp home__occupation">Desenvolvedor Frontend.</p>
            </section>

            <nav className="home__nav">
                <div className="home__nav-box">
                    <a href="https://www.linkedin.com/in/matheus-lima-the-dev/" target='_blank'><TiSocialLinkedin color="#3bf3ff" /></a>
                </div>

                <div className="home__nav-box"></div>

                <div className="home__nav-box">
                    <a href="https://github.com/the-matheuslima/" target='_blank'><GoMarkGithub color="#3bf3ff" /></a>
                </div>
            </nav>

            <section className="home__introduce">
                <div className="home__introduce__content">
                    <div className="introduce">
                        <h2>Deixe me <span className="crisp">Apresentar</span></h2>

                        <p><i>Ola me chamo <span className="crisp">Matheus</span>, tenho 18 anos, estudo programação web desde o final de 2021, moro em Mauá, Sp</i>.</p> <br />

                        <p><i>Amo coisas nerds, como animes, mangas, games, series e livros. Meu anime/manga favorito é <span className="crisp">One punch man</span> e sim saitama <span className="crisp">sola</span> goku </i>👊.</p> <br />

                        <p><i>Ironias a parte, sou apaixonado por programação, adoro estudar e aprender novas tecnologias. Todo conhecimento que tenho hoje e graças a livros, cursos gratuitos e a comunidade</i> 💖.</p> <br />

                        <p><i>Bom, por fim, como ja disse um cara que admiro bastante <span className="crisp">Ayrton Senna :</span> "Na vida não importa o que você esteja fazendo, faça sempre o seu melhor." </i></p>
                    </div>

                    <div className="gif">
                        <img src={Programming} alt="" />
                    </div>
                </div>

                <div className="home__find-me">
                    <div>
                        <h2 className="mgb-1">Me encontre no</h2>
                        <p className="mgb-1"><i>Sinta-se  à-vontade para <span className="crisp">conectar</span> comigo</i></p>
                    </div>

                    <ul className="social-medias">
                        <li><a href="https://github.com/the-matheuslima/" target='_blank'><GoMarkGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/matheus-lima-the-dev/" target='_blank'><TiSocialLinkedin /></a></li>
                    </ul>
                </div>
            </section>
        </motion.main >
    )
}

export default Home;