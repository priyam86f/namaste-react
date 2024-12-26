import React from 'React';
import ReactDOM from 'react-dom/client'

//writing react in traditional manner [without jsx]

const heading = React.createElement("h1",{},"hello world from react")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)


//this is how react is written with jsx, cool isn't it!

const heading2 = <h1>hello from jsx buddy !</h1>
const root2 = ReactDOM.createRoot(document.getElementById("root2"))
root2.render(heading2)


//using functional component to write jsx.
//to write jsx on more than one line, we use ()
const FunctionalComponent = () => (
    <div>
        <h1>ok</h1>
    </div>
) 
root2.render(<FunctionalComponent/>)


//component composition : Adding one component inside another functional component

const Component1 = () => (
    <div>
        <h1>hello!</h1>
    </div>
)

const Component2 = () =>

(
<div>
    <Component1/>
    <h2>bye.</h2>
    </div>    
)

root2.render(<Component2/>)