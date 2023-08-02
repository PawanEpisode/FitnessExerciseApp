import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import {
  exerciseOptions,
  youtubeOptions,
  fetchdata,
} from "../utility/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

const ExerciseDetail = () => {
  const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchdata(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchdata(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData?.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData?.contents);

      const targetMuscleExerciseData = await fetchdata(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData?.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExerciseData);

      const equipmentExerciseData = await fetchdata(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData?.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExerciseData);
    };
    fetchExerciseData();
  }, [id]);
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail?.name}
      />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} 
        equipmentExercises={equipmentExercises}
        exerciseDetail={exerciseDetail}
      />
    </Box>
  );
};

export default ExerciseDetail;
