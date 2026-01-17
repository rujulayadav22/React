// const heading = React.createElement("h1",{id:"heading"}, " Hello World From React");

const parent=React.createElement
("div",{id:"Parent"},[
    React.createElement("div",{id:"Child"},
        [React.createElement("h1",{},"H1 tag"),
            React.createElement("h2",{},"H2 tag"
            )],

          React.createElement("div",{id:"Child2"},[
            React.createElement("h1",{},"H1 tag"),
            React.createElement("h2",{},"H2 tag")],
          )
    )
])



const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);