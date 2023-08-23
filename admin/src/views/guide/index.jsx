import React from "react";
import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
import { Button } from "antd";
import TypingCard from '@/components/TypingCard'
import steps from "./steps";
const driver = new Driver({
   animate: true, // whether to animate when changing the highlighted element,
                   // When the position of the header is fixed, the element will be covered, which is a bug of driver.js,
                   // See https://github.com/kamranahmedse/driver.js/issues/97 for details
   opacity: 0.75, // background opacity (0 means only popup window, no coverage)
   doneBtnText: "Done", // Text on the last button
   closeBtnText: "Close", // Text on the "Close" button for this step
   nextBtnText: "Next", // Next button text for this step
   prevBtnText: "Previous", // previous button text for this step
});

const guide = function () {
   driver. defineSteps(steps);
   driver.start();
};
const Guide = function () {
   const cardContent = `The guide page is useful for those who enter the project for the first time, you can briefly introduce the functions of the project.
                        This Demo is based on <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js</a>`
   return (
     <div className="app-container">
       <TypingCard title='Beginners Guide' source={cardContent}/>
       <Button type="primary" onClick={guide}>
         open guide
       </Button>
     </div>
   );
};

export default Guide;