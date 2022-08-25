import React, { useState } from "react";
import "../styles/TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Kiara Advani",
      url: "https://scontent.fdel1-1.fna.fbcdn.net/v/t1.6435-9/165144406_296060415207675_1982103051589387061_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C4yPpSUKYjYAX-ME2nO&tn=eZT0uOhGsulGclsy&_nc_ht=scontent.fdel1-1.fna&oh=00_AT8SuumwXqY0vGcormkEqML26UAVYcdJzYmCfxhBq-1AAA&oe=632C556A",
    },
    {
      name: "Sidharth Malhotra",
      url: "https://images.inuth.com/2017/05/2sidharthmalhotrasexyfbdp.jpg",
    },
  ]);

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
