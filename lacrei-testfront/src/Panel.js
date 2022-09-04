import Cards from "./Cards";
import React from 'react';
import data from './data.json'
import { Container } from "@mui/material";

function Panel() {

  const newArray = data.steps.map((box) => {
    return { ...box, duration: data.durations[`${box.key}`] };
  });

  return (
    <Container sx={{alignContent: 'center', justifyContent: 'center', textAlign: 'center', justifyItems: 'center'}} >
      <h1>Cards and timer</h1>
      {newArray.map((card) => {
        return <Cards color={card.value} timer={card.duration} newArray={newArray}/>
      })}

    </Container>
  );
}

export default Panel;
