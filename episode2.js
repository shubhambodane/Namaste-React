import React from "react";
import ReactDOM from "react-dom/client";

// JSX is not HTML in javascript but it is a HTML or XML like syntax
// JSX code is transpiled before reaching the JS engine i.e. gets converted to code
// which browsers or JS engine can understand - PARCEL - Babel
// Babel converts JSX to react code

const Title = () => (
  <h1 className="head" tabIndex="1">
    Namaste React🚀 using JSX
  </h1>
);

// React Component
// Class based components -- old way of writing code
// functional components -- new way of writing react code

// React Functional Component -- JS function which return JSX i.e. react element
// Component Composition - using component inside component

//React Fragment behaves like an empty tag
const HeadingComponent = () => (
  <>
    <div id="container">
     <Title/>
      <h1 className="heading"> Namaste React functional component </h1>
    </div>
    <div id="container2">
     <Title/>
      <h1 className="heading"> Namaste React functional component </h1>
    </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
