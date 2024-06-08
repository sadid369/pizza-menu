import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header> </Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
}
function Pizza({ data }) {
  return (
    <div className="pizza">
      <img src={data.photoName} alt="Pizza spinaci" />
      <h2>{data.name}</h2>
      <p>{data.ingredients}</p>
      <span>{data.price}</span>
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h3>Our Menu</h3>
      {pizzaData.map((data) => (
        <Pizza data={data} key={data.name} />
      ))}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 1;
  const closeHour = 22;
  const isOpen =
    hour >= openHour && hour <= closeHour
      ? "We are Open now"
      : "We Are Currently Close ";
  console.log(isOpen);
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} we're currently open
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
