import React from "react";
import { Box } from "@mui/material";
import SimilarExercise from "./SimilarExercise";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises, exerciseDetail }) => {
  return (
    <Box sx={{ mt: { lg: "50px", xs: "0" } }} ml={'20px'}>
      <SimilarExercise name={exerciseDetail?.target} similarExercises={[...targetMuscleExercises]}/>
      <SimilarExercise name={exerciseDetail?.equipment} similarExercises={[...equipmentExercises]} />
    </Box>
  );
};

export default SimilarExercises;
