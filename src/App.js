import Framework from "./components/Framework";
import SkillsTable from "./components/Skills";
import Projects from "./components/Projects";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import NextPage from "./components/NextPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React, { useState, useRef } from "react";

import "./App.css";

function App() {
  let path = window.location.pathname.slice(1);
  path = path === "" ? "home" : path;
  const [carouselShowing, setCarousel] = useState(0);
  const [menuSelected, setSelected] = useState([path]);
  const [modalVisible, setModalVisible] = useState(false); //Contact me Modal

  return (
    <Router>
      <Framework
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        menuSelected={menuSelected}
        setSelected={setSelected}
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/skills">
            <SkillsTable setCarousel={setCarousel} setSelected={setSelected} />
          </Route>
          <Route path="/projects">
            <Projects
              carouselShowing={carouselShowing}
              setCarousel={setCarousel}
            />
          </Route>
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
        {/* key makes it remount every time */}
        <NextPage
          key={path}
          menuSelected={menuSelected}
          setSelected={setSelected}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
      </Framework>
    </Router>
  );
}

export default App;
