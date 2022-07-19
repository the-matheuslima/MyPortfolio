import React from "react";
import ResumePng from "../../assets/resume.pdf";
import A from "../../assets/images/balloon-i.png";
import Bra from '../../assets/images/bracket.png'

import { motion } from "framer-motion"

import './style.scss';

const Resume = () => {
    return (
        <motion.main initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, scale: 0 }}
            className="resume">
            <section className="resume__content">
                <div className="resume__icon">
                    <img src={A} alt="" />
                </div>

                <div className="resume-pdf">
                    <iframe frameborder="0" scrolling="auto" src={ResumePng} ></iframe>
                </div>


                <div className="resume__icon">
                    <img src={Bra} alt="" />

                </div>
            </section>
        </motion.main>
    )
}

export default Resume;
