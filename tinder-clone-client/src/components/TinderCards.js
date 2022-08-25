import React, { useState } from "react";
import "../styles/TinderCards.css";
import TinderCards from "react-tinder-card";
import { SwipeableDrawer } from "@mui/material";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Kiara Advani",
      url: "https://scontent.fdel1-1.fna.fbcdn.net/v/t1.6435-9/165144406_296060415207675_1982103051589387061_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C4yPpSUKYjYAX-ME2nO&tn=eZT0uOhGsulGclsy&_nc_ht=scontent.fdel1-1.fna&oh=00_AT8SuumwXqY0vGcormkEqML26UAVYcdJzYmCfxhBq-1AAA&oe=632C556A",
    },
    {
      name: "Sidharth Malhotra",
      url: "",
    },
  ]);
  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => (
          <TinderCards
            className="swipe"
            key={character.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardleScreen={() => outOfFrame(Character, name)}
          >
            <h1>{person.name}</h1>
          </TinderCards>
        ))}
      </div>
    </div>
  );
}
export default TinderCards;
