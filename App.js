import React from "react";
import {createRoot} from "react-dom/client";
var reactRoot = createRoot(document.getElementById("main-container"));
const App =() =>{
    return(
        <>
        <Header/>
        <Hero/> 
        <Body/>
        <Footer/>
        </>
    );
};
reactRoot.render(<App/>);
