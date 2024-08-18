import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Sln1Component from "./pages/solutionOne";
import Sln3Component from "./pages/solutionThree";
import Sln2Component from "./pages/solutionTwo";
// import HomePage from "./pages/homePage";
import ResponsiveAppBar from "./layouts/header";
import Sln4Component from "./pages/solutionFour";
import React, { Suspense } from "react";

const SolutionOne = React.lazy(() => import("./pages/solutionOne"));
const SolutionTwo = React.lazy(() => import("./pages/solutionTwo"));
const SolutionThree = React.lazy(() => import("./pages/solutionThree"));
const SolutionFour = React.lazy(() => import("./pages/solutionFour"));
const SolutionFive = React.lazy(() => import("./pages/solutionFive"));

const HomePage = React.lazy(() => import("./pages/homePage"));

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solution1" element={<Sln1Component />} />
          <Route path="/solution2" element={<SolutionTwo />} />
          <Route path="/solution3" element={<SolutionThree />} />
          <Route path="/solution4" element={<SolutionFour />} />
          <Route path="/solution5" element={<SolutionFive />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
