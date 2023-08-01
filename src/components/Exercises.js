import React, { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Button, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchdata } from "../utility/fetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 8;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  const currentExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const resultCard = currentExercises?.reduce((acc, current) => {
    if (!acc?.includes(current?.bodyPart)) {
      acc.push(current?.bodyPart);
    } else if (!acc?.includes(current?.target)) {
      acc.push(current?.target);
    } else if (!acc?.includes(current?.equipment)) {
      acc.push(current?.equipment);
    }
    return acc;
  }, []);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);

    window.scrollTo({ top: 1600, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchBodyPartsData = async () => {
      let exerciseData = [];

      if (bodyPart === "all") {
        exerciseData = await fetchdata(
          `https://exercisedb.p.rapidapi.com/exercises`,
          exerciseOptions
        );
      } else {
        exerciseData = await fetchdata(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
    };

    fetchBodyPartsData();
  }, [bodyPart]);

  console.log("result", currentExercises);
  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Stack
        direction="row"
        gap="15px"
        mb={"30px"}
        justifyContent="center"
        flexWrap={"wrap"}
      >
        {resultCard.length ? (
          <Typography variant="h4" mb="46px">
            Showing Results
          </Typography>
        ) : null}
        {resultCard.length
          ? resultCard.map((result,index) => (
              <Button
                key={index}
                sx={{
                  ml: "21px",
                  color: "#fff",
                  background: "#86af49",
                  fontSize: "24px",
                  height: "60px",
                  borderRadius: "20px",
                  textTransform: "capitalize",
                }}
              >
                {result}
              </Button>
            ))
          : null}
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises?.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisePerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisePerPage)}
            page={currentPage}
            onChange={handlePageChange}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};
export default Exercises;
