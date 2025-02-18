import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Sln1Component from "./pages/solution-one";
// import HomePage from "./pages/homePage";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import ResponsiveAppBar from "./layouts/header";
import HomePage from "./pages";
import CategoryTree from "./pages/category-tree";
import SolutionTwo from "./pages/currency-exchange";
import SolutionFive from "./pages/debounce";
import SolutionFour from "./pages/todo-app";

export const MessageContext = createContext<{
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}>({
  message: "",
  setMessage() {},
});
function App() {
  const [message, setMessage] = useState<string>("");

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      <Router>
        <ResponsiveAppBar />
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solution1" element={<Sln1Component />} />
          <Route path="/currency-exchange" element={<SolutionTwo />} />
          <Route path="/todo-app" element={<SolutionFour />} />
          <Route path="/debounce" element={<SolutionFive />} />
          <Route path="/category-tree" element={<CategoryTree />} />
        </Routes>
        {/* </Suspense> */}
      </Router>
    </MessageContext.Provider>
  );
}

export default App;
