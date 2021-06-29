import "./App.css";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { NavBar } from "./MyComponent/NavBar";
import { Header } from "./MyComponent/Header";
import { Home } from "./MyComponent/Home";

//importing the images
import homeImg from "./Images/1.png";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <NavBar />
          <Header imgs={homeImg} />
        </header>
        <div className="content">
          <Home />
        </div>
      </Router>
    </div>
  );
}

export default App;
