import React, { useState } from "react";
import "../styles/TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    //setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards_container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardleScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
export default TinderCards;
