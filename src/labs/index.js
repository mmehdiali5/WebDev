import Assignment3 from "./a3";
import Nav from "../nav";
import {Route, Routes} from "react-router";
import Assignment4 from "./a4";


function Labs() {
    return(
        <div>
            <Nav/>
            {/*<h1>Assignment 3</h1>-->*/}
            <Routes>
                <Route path="a3"
                       element={<Assignment3/>}/>
                <Route path="a4"
                       element={<Assignment4/>}/>
            </Routes>
        </div>
    );
}
export default Labs;