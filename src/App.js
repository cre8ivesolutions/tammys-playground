// import logo from "./logo.svg";
import React, { useContext, Suspense } from "react";
import "./App.css";
import UseSetState from "./components/useState";
import ThisContext from "./components/Context";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Contact from "./components/Contact";
import styled from "styled-components";
import Footer from "./components/Footer";
// import Navigation from "./components/Navigation";

// const Welcome = React.lazy(() => import("./components/Welcome"));
const Home = React.lazy(() => import("./components/Home"));
const StyledButton = styled.button`
  display: inline-block;
  border-radius: 0.75em;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 9rem;
  background: lightblue;
  color: blue;
  border: 0.5em solid mediumblue;
`;



// ${props => props.primary ? "css"`
//   background: white;
//   color: black;}

function App() {
  const ContextInfo = useContext(ThisContext);
  // let { title } = useParams()

  return (
    <div className="App">
      <Router>
        <div className="NavBar">
          <StyledButton>
            <Link to="/home">HOME</Link>
          </StyledButton>
          <StyledButton>
            <Link to="/Contact">CONTACT</Link>
          </StyledButton>
        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" />
        </Routes>
      </Router>
      <header className="App-header">
        <Home />
      </header>
      <Suspense
        fallback={
          // <div style={[{ height: 10 }, { width: 10 }, { background: "green" }]}>
          <div className="position-absolute top-100 start-50 translate-middle mt-1">
            <Button
              variant="success"
              type="button"
              className="btn btn-dark position-absolute top-100 start-50 translate-middle mt-1"
              disabled
            >
              <Spinner as="span" animation="border" color="#FF00FF">
                Loading...
              </Spinner>
            </Button>
          </div>
          // </div>
        }
      >
        <h1>Again...</h1>
        <h2>Except this time we will do it with some Suspense!</h2>
        <Home />
      </Suspense>
      <br />
      <div>
        <UseSetState />
        <button width="50vw">{ContextInfo}</button>
      </div>
      <Footer />
    </div>
    // </ThisContext.provider>
  );
}

export default App;

// <ThisContext.Provider value={ContextInfo}/>
