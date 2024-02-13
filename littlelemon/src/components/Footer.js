import logo from "../images/Logo.png"

function Footer(){
   return( <footer className="Footer">
        <section>
            <img src={logo} alt="Logo" id="logo"></img>
        </section>
        <section>
            <p>Adress</p>
            <p>Email</p>
            <p>Phone number</p>
            <button>Reserve now</button>
            <button>Order now</button>
        </section>
    </footer>)
};

export default Footer;