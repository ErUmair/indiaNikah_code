import React from "react";
import Grid from '@mui/material/Grid';

// not in use 

const ButtonOfGuidelines = (data) => {
  // const {
  //   btn1,
  //   btn2,
  //   btn3,
  //   btn4,
  //   btn5,
  //   btn6,
  //   btn7,
  //   btn8,
  //   btn9,
  //   btn10,
  //   btn11,
  //   btn12,
  //   btn13,
  //   btn14,
  //   btn15,
  //   btn16,
  //   btn17,
  //   btn18,
  //   btn19,
  //   btn20,
  //   btn21,
  //   key,
  //   btn
  // } = props;
  return (
    <div  className='btns-container' >
      <Grid container spacing={1} className='btn-grid' >
        {/* <Grid item xs={6} sm={3}> */}
          <button>{data}</button>
        {/* </Grid> */}
        {/* 
        <Grid item xs={6} md={3}>
          <button >{btn1}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button >{btn2}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn3}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn4}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn5}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn6}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn7}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn8}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn9}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn10}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn11}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn12}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn13}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn14}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn15}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn16}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn17}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn18}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn19}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn20}</button>
        </Grid>
        <Grid item xs={6} md={4} lg={3}>
          <button>{btn21}</button>
        </Grid> */}

      {/* <button variant="contained">{btn2}</button>
      <button variant="contained">{btn3}</button>
      <button variant="contained">{btn4}</button>
      <button variant="contained">{btn5}</button>
      <button variant="contained">{btn6}</button>
      <button variant="contained">{btn7}</button>
      <button variant="contained">{btn8}</button>
      <button variant="contained">{btn9}</button>
      <button variant="contained">{btn10}</button>
      <button variant="contained">{btn11}</button>
      <button variant="contained">{btn12}</button>
      <button variant="contained">{btn13}</button>
      <button variant="contained">{btn14}</button>
      <button variant="contained">{btn15}</button>
      <button variant="contained">{btn16}</button>
      <button variant="contained">{btn17}</button>
      <button variant="contained">{btn18}</button>
      <button variant="contained">{btn19}</button>
      <button variant="contained">{btn20}</button>
      <button variant="contained">{btn21}</button> */}
      </Grid>
    </div>
  );
};

export default ButtonOfGuidelines;
