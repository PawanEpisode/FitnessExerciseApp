import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";

import "./App.css";

const App = () => {
  return (
    <Box width={'400px'} sx={{width: { xl: '1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path="/fitness" element={<Home />} />
        <Route path="/fitness/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
