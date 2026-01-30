import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id:"heading"},"React");

// React Element //
// const heading=(
//   <h1 className="head">
//     React Element</h1>
// );

// React Component //
// const Heading=() => {
//   <h1 className="head">
//     React Element</h1>
// };

const elem = <span>react Element</span>
 

// const Title = function () {
//   return (
//     <h1 className="head" tabIndex="5">
//     Namaste React using JSX 🚀
//   </h1>
// );
// };

// JSX //
const jsxHeading=
(<h1 id="heading" className="head" tabIndex="1">
  React using JSX
  </h1>
  );

  //REACT FUNCTIONAL ELEMENT//
//Component Composition //
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading">
//       Namaste React Functional Component
//     </h1>
//   </div>


const number=1000;
const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading">
            Namaste React Functional Component
    </h1>
  </div>
);

const Title = () => (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste React using JSX 🚀
    <HeadingComponent/>
  </h1>
);



const HeadingComp=() => (<h1 className="heading1"
>React Functional Component</h1>
);

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)
root.render(<Title />);


