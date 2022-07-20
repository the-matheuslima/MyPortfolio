import { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import ModalThanks from "../modal-thanks";
import './style.scss';

const FormContact = () => {
    const [thanksModal, setThanksModal] = useState(false);

    const form = useRef();

    const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
    const USER_ID = import.meta.env.VITE_USER_ID

    const handleFormSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID, form.current)
            .then((result) => {
                console.log(result.text, 'enviado');
                setThanksModal(!thanksModal)

            }).catch((error) => {
                console.log(error.text);
                alert("FAILED...", error);
            }).finally(() => {
                setTimeout(() => {
                    setThanksModal(false)
                    console.log('as');
                }, 10000)
            })
        e.target.reset()
    }

    return (
        <>
            <form ref={form} onSubmit={handleFormSubmit} className='form'>

                <h2>Entre em contato comigo por<span className='crisp'> Email</span></h2>
                <div className='form__group'>
                    <div className='form__group-box'>
                        <input placeholder='assunto' type="text" className='input' name='user_subject' required />

                        <input placeholder='seu nome...' type="text" className='input' name='user_name' required />
                        <input placeholder='seu email..' className='input' type="email" name="user_email" id="" required />
                    </div>

                    <div className='form__group-box'>
                        <textarea name="message" className='textarea' placeholder='mensagem...' required></textarea>
                    </div>
                </div>

                <input type="submit" value="Enviar" className='button' />
            </form>
            {thanksModal &&
                <ModalThanks />
            }
        </>
    )
}

export default FormContact