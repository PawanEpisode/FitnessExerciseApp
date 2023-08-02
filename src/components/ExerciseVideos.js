import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { getviews } from "../helper";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {

  return (
    <Box id="exercises" sx={{ marginTop: { lg: "100px", xs: "20px" } }} p="20px">
      <Typography variant="h4" mb="33px">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        Exercise Videos
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "50px", xs: "0" },
        }}
      >
        {exerciseVideos.length ? (
          exerciseVideos?.slice(0, 6).map((item, index) => (
            <a
              key={index}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={item.video.thumbnails?.[0].url}
                alt={item.video.title}
              />
              <span className="exercise-video-title" title={item.video.title}>
                {item.video.title}
              </span>
              <span
                className="exercise-video-channelname"
                title={item.video.channelName}
              >
                {item.video.channelName}
              </span>
              <span
                className="exercise-video-view"
                title={item.video.viewCountText}
              >
                {getviews(item.video.viewCountText)} views •{" "}
                <span
                className="exercise-video-publishtime"
                title={item.video.publishedTimeText}
              >
                {item.video.publishedTimeText}
              </span>
              </span>
            </a>
          ))
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
