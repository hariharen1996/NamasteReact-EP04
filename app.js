import React from "react";
import ReactDOM from "react-dom/client";
import { resList } from "./data";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = ({ rescard }) => {
  const { ...data } = rescard.data;
  const {
    name,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    deliveryTime,
    address,
  } = data;

  console.log(data);
  return (
    <div className="card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/${cloudinaryImageId}`}
        alt={name}
        className="res-logo"
      />
      <h3>{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>DeliveryTime: {deliveryTime}</p>
      <p>₹{costForTwo / 100} FOR TWO</p>
    </div>
  );
};

const RestaurentList = (props) => {
  const { resList } = props;
  //console.log(resList);
  return (
    <div className="res-card">
      {resList.map((rescard) => (
        <RestaurentCard rescard={rescard} key={rescard.data.id} />
      ))}
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input
          type="search"
          className="input"
          placeholder="search restaurents here..."
        />
      </div>
      <div className="restaurent-container">
        <RestaurentList resList={resList} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
