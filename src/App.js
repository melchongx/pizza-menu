import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

function Header() {
  return (
    <div className="header">
      <h1>FAST REACT PIZZA CO</h1>
    </div>
  );
}
function Footer() {
  const time = new Date().getHours();

  function isOpen() {
    if(time >= 10 && time <= 15) {
      return ("We're open and happy to welcome you.");
    } else {
      return ("Sorry, we are closed.");
    }
  }

  return (
    <footer className="footer">
      {isOpen()}
    </footer>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>OUR MENU</h2>
      <p>
        Authentic Italian Cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <Pizza />
    </div>
  );
}
function Pizza() {
  return (
    <div className="pizzas">
      <div className="pizza">
        <img src="./pizzas/focaccia.jpg"></img>
        <div>
          <h3>Focaccia</h3>
          <p>Bread with italian olive oil and rosemary</p>
          <span>6</span>
        </div>
      </div>
      <div className="pizza">
        <img src="./pizzas/margherita.jpg"></img>
        <div>
          <h3>Pizza Margherita</h3>
          <p>Tomato and mozarella</p>
          <span>12</span>
        </div>
      </div>
      <div className="pizza">
        <img src="./pizzas/spinaci.jpg"></img>
        <div>
          <h3>Pizza Spinaci</h3>
          <p>Tomato, mozarella, spinach, and ricotta cheese</p>
          <span>12</span>
        </div>
      </div>
      <div className="pizza">
        <img src="./pizzas/funghi.jpg"></img>
        <div>
          <h3>Pizza Funghi</h3>
          <p>Tomato, mozarella, mushrooms, and onion</p>
          <span>12</span>
        </div>
      </div>
      <div className="pizza">
        <img src="./pizzas/salamino.jpg"></img>
        <div>
          <h3>Pizza Salamino</h3>
          <p>Tomato, morazella, and pepperoni</p>
          <span>SOLD OUT</span>
        </div>
      </div>
      <div className="pizza">
        <img src="./pizzas/prosciutto.jpg"></img>
        <div>
          <h3>Pizza Prosciutto</h3>
          <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
          <span>18</span>
        </div>
      </div>
    </div>
  );
}
