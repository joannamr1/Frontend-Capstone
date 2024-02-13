import React from 'react';
import resImg from "../images/restauranfood.jpg";

function Header({ onBookTableClick }) {
    return (
        <header>
            <section>
                <article id="headertext">
                    <h2>Little Lemon Restaurant</h2>
                    <h3>Chicago</h3>
                    <p>Mediterranean Restaurant for dining in or order to your home</p>
                    <button id="headerbutton" onClick={onBookTableClick}>Book a Table</button>
                </article>
                <img src={resImg} alt="food" id="resImg"></img>
            </section>
        </header>
    );
}

export default Header;
