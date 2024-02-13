import lemonImg from "./lemon-dessert.jpg";
import bruImg from "./bruchetta.svg";
import greImg from "./greek-salad.jpg";
import '../App.css';

function Menu (){
    return(
        <main className="Menu">
            <section className="MenuHeading">
                <h3>Menu</h3>
                <button className="MenuButton">See Menu</button>
            </section>
            <section className="MenuCards">
                <article className="MenuCard">
                <img src={greImg} alt="Greek Salad" id="logoHeader"></img>
                <h4>Greek Salad</h4>
                <p className="price">3.99€</p>
                <p>Description</p>
                <button>Order now</button>
                </article>
                <article className="MenuCard">
                <img src={bruImg} alt="Bruschetta"></img>
                <h4>Bruschetta</h4>
                <p className="price">3.99€</p>
                <p>Description</p>
                <button>Order now</button>
                </article> 
                <article className="MenuCard">
                <img src={lemonImg} alt="Lemon Sorbet"></img>
                <h4>Lemon Sorbet</h4>
                <p className="price">3.99€</p>
                <p>Description</p>
                <button>Order now</button>
                </article>
            </section>
        </main>
    )
}

export default Menu;