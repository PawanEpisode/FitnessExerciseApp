import { Stack, Typography } from '@mui/material';
import React from 'react';
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './Loader';

const SimilarExercise = ({name, similarExercises }) => {
  return (
    <>
        <Typography variant="h4" mb="10px" >
        Similar{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Exercise Videos
      </Typography>
      <Typography variant="h6" textTransform={'capitalize'}>
        Find the gear you need for maximum gains.
      </Typography>
      <Stack
        direction="row"
        sx={{
          padding: "30px",
          position: "relative",
        }}
      >
        {similarExercises.length ? <HorizontalScrollBar data={similarExercises} /> : <Loader />}
      </Stack>
    </>
  )
}

export default SimilarExercise