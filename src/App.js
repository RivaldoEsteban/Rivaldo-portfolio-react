import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Main from "./components/main";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path={`${process.env.PUBLIC_URL}/`} exact>
        <Header />
        <Hero />
        <Main />
        <Footer />
      </Route>
    </Router>
  );
}

export default App;
