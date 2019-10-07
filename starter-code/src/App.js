import React from "react";
import "./App.css";

class App extends React.Component {
    render() {
        const header = (
            <div id="root">
                <div className="App">
                    <div className="header">
                        <img className="Logo" src="images/ironhack-logo.svg" />
                        <img className="menu" src="images/menu-top.svg" />
                    </div>
                    <div className="text">
                        <h1> Say hello to ReactJS </h1>
                        <h3>You will learn a Frontend framework from scratch to become a Ninja Developer.</h3>
                    </div>
                    <div className="react">
                        <img className="Logo" src="images/react-logo.svg" />
                    </div>
                    <button className="button">Awesome!</button>
                </div>
                
            </div>
                );

         const icons = (
                    <div className="features">
                    <div className="IconContainer">
                        <img className="icons" src="images/icon1.png" />
                        <h2 className="IconTitle">Declarative</h2>
                        <p>React makes it painless to create interactive UIs.</p>
                    </div>
                    <div className="IconContainer">
                        <img className="icons" src="images/icon2.png" />
                        <h2 className="IconTitle">Components</h2>
                        <p>Build encapsulated commponent that manage their state.</p>
                    </div>
                    <div className="IconContainer">
                        <img className="icons" src="images/icon3.png" />
                        <h2 className="IconTitle">Single-Way</h2>
                        <p>A set of immutable values are passed to the commponent´s.</p>
                    </div>
                    <div className="IconContainer">
                        <img className="icons" src="images/icon4.png" />
                        <h2 className="IconTitle">JSX</h2>
                        <p>Statically-typed, designed to run on modern browsers.</p>
                    </div>
                </div>
                );
            return(
                <div className="Container">
                    {header}
                    {icons}
                </div>
                )
    
    }
}

export default App;