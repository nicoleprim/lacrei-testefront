import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import BounceLoader from "react-spinners/BounceLoader";
import { Container } from "@mui/material";

const Cards = (props) => {
  const [background, setBackground] = useState("transparent");
  const [message, setMessage] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setBackground(props.color);
      setMessage(true)
    }, props.timer);
  }, [props.color, props.timer]);

  return (
      <Box
        sx={{
          alignItems: 'center',
          background: background,
          border: `5px solid ${props.color}`,
          margin: '5px',
          borderRadius: '10px',
          width: '50em',
          height: '5em',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        {background === 'transparent' ? <BounceLoader color={props.color} size={30} /> : ""}
        {message && <p><strong>Duração do ciclo</strong> = {props.timer} ms</p>}
      </Box>
  );
};

export default Cards;
