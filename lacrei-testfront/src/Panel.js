import Cards from "./Cards";
import React from 'react';
import data from './data.json'
import { Container } from "./StyledPanel";

function Panel() {

  const newArray = data.steps.map((box) => {
    return { ...box, duration: data.durations[`${box.key}`] };
  });

  return (
    <Container>
      <h1>Cards and timer</h1>
      {newArray.map((card) => {
        return <Cards color={card.value} timer={card.duration} newArray={newArray}/>
      })}

    </Container>
  );
}

export default Panel;
