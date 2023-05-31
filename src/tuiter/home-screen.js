import React from "react";
import TuitList from "./tuits";
import WhatsHappening from "./tuits/whats-happening";

function HomeScreen() {

    return (
        <>
            <h1>Home</h1>
            <WhatsHappening/>
            <TuitList/>
        </>);
}

export default HomeScreen;