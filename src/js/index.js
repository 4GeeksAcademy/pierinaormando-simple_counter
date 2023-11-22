//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Counter from "./component/home.jsx";

//render your react application
let counter = 0;
setInterval(function () {

    const six = Math.floor((counter / 100000) % 10);
    const five = Math.floor((counter / 10000) % 10);
    const four = Math.floor((counter / 1000) % 10);
    const three = Math.floor((counter / 100) % 10);
    const two = Math.floor((counter / 10) % 10);
    const one = counter % 10;

    ReactDOM.render(<Counter
        secondOne={one}
        secondTwo={two}
        secondThree={three}
        secondFour={four}
        secondFive={five}
        secondSix={six} />,
        document.querySelector("#app"));
    counter++;
}, 1000);