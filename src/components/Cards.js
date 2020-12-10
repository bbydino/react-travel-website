import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import img1 from "../assets/images/img-9.jpg";
import img2 from "../assets/images/img-2.jpg";
import img3 from "../assets/images/img-3.jpg";
import img4 from "../assets/images/img-4.jpg";
import img5 from "../assets/images/img-8.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these SMEXY Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Find a beautiful jungle woman or a waterfall in the Amazon!"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Go on a private cruise and search for dolphins in the Bahamas!"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="Get lost in the Atlantic Ocean with the lover that you don't have!"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={img4}
              text="Play fútbol with Cristiano Ronaldo, Messi, and the Fortnite soccer girl on a hidden island!"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img5}
              text="Search for the origins of Duel Monsters in the deserts of Egypt!"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
