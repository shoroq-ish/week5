import React from "react";
import { Card } from "@mui/material";
import {CardContent} from "@mui/material";
import {CardMedia} from "@mui/material";
import Image1 from '../assets/al.svg';
import {Typography} from "@mui/material";

import { spacing } from '@mui/material';
import '../CSS/cards.css'

import "@fontsource/nunito-sans";

function Cards(props) {
  // const img = require.context('assets/al.svg', true);
  
  return(
  <div class="mainDiv">
    <Card>
    <CardMedia
        component="img"
        height="170"
        image={props.img}
        alt="flag"
      />
      <CardContent>
      <Typography gutterBottom  component="div" sx={{fontWeight: '900', fontSize: '1.3rem', fontFamily:'Nunito Sans', mb: 2}} >
          {props.countryName}
        </Typography>
        <Typography>
        <div ><span class="property">Population:</span><span class="value">586,859</span></div>
        <div ><span class="property">Region:</span><span class="value">Africa</span></div>
        <div ><span class="property">Capital:</span><span class="value">Sofia</span></div>
        </Typography>
      </CardContent>
    </Card>
  </div>
  );
}

export default Cards;
