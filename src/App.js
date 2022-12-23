import "./App.css";
import NAV from "./components/nav/Nav.js";
import Header from "./components/header/Header.js";
import Content from "./components/content/Content";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "ee7b5864aa0b58fbb853478af1746991",
};

const App = () => {
  return (
    <div>
      <NAV />
      <Header />
      <Content />
    </div>
  );
};

export default App;
