import { Link } from "react-router-dom"
import "./style.scss";
import { MdSegment, MdClear } from "react-icons/md";
import { useState } from "react";


const NavBar = () => {
    const [active, setActive] = useState(false);

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to='/'>
                    <p>ML.</p>
                </Link>
            </div>
            <div className="navbar__button-mobile">
                {active ? <i><MdClear className="icon" onClick={() => setActive(!active)} /></i>
                    : <i><MdSegment onClick={() => setActive(!active)} /></i>}
            </div>

            <ul className={`${active ? 'active' : ''} navbar__box`}>
                <li onClick={() => setActive(!active)}>
                    <Link to='/'>
                        Home
                    </Link>
                </li>

                <li onClick={() => setActive(!active)}>
                    <Link to='/projects'>
                        Projetos
                    </Link>
                </li>

                <li onClick={() => setActive(!active)}>
                    <Link to='/about'>
                        Sobre
                    </Link>
                </li>

                <li onClick={() => setActive(!active)}>
                    <Link to='/resume'>
                        Curriculo
                    </Link>
                </li>

            </ul>
            <div className="navbar__button-mobile">
                {active ? <MdClear onClick={() => setActive(!active)} />
                    : <i><MdSegment onClick={() => setActive(!active)} /></i>}
            </div>

        </nav >
    );
};

export default NavBar;