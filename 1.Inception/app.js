const header = React.createElement("h1", { id: "one" }, "Hello from React")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(header)


//create a nested element in react that has the following structure : 

/*
<div id="parent">
<div id="child">
<h1>Hello From the nest!</h1>
<h2>Hello from the nest!</h2>
</div>
<div id="child2">
<h1>Hello From the nest!</h1>
<h2>Hello from the nest!</h2>
</div>


</div>

*/

const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
    [React.createElement("h1", { id: "parent" },
        "Helloo from the nest!"
    ), React.createElement("h2", { id: "parent" },
        "Helloo from the nest!"
    )]

),React.createElement("div", { id: "child2" },
[React.createElement("h1", { id: "parent" },
    "Helloo from the nest!"
), React.createElement("h2", { id: "parent" },
    "Helloo from the nest!"
)]

)]
)
root.render(parent)