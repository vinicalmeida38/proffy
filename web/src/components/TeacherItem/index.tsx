import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://pbs.twimg.com/profile_images/829486738582142976/fYeY-Oyp_400x400.jpg" alt="Vini"/>
                <div>
                    <strong>Vinícius Almeida</strong>
                    <span>Música</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet quam ac ex lacinia fringilla eget eu velit. 
                <br/> <br/>
                Nullam quam orci, tristique nec mi ac, ultricies porta turpis. Cras tempor faucibus ligula a ullamcorper.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;