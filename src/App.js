import React from "react";
import Posts from "./components/Posts/Posts";
import "./App.css";

const App = () => {
  return (
    <div className="main-container">
      <h1 className="main-heading">Breaking News</h1>
      <Posts></Posts>
    </div>
  );
};
export default App;
