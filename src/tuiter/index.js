import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import {Route, Routes} from "react-router";

function Tuiter() {
    return(
        <div>
            <Nav/>
            {/*<h1>Tuiter</h1>*/}
            <div className="row">
                <div className={"col-2"}>
                    <NavigationSidebar/>
                </div>
                <div className={"col-7"}>
                    <Routes>
                        <Route path={"/home"} element={<h1>HOME</h1>}/>
                        <Route path={"/explore"} element={<h1>EXPLORE</h1>}/>
                        <Route path={"/notifications"} element={<h1>Notifications</h1>}/>
                        <Route path={"/messages"} element={<h1>Messages</h1>}/>
                        <Route path={"/bookmarks"} element={<h1>Bookmarks</h1>}/>
                        <Route path={"/lists"} element={<h1>Lists</h1>}/>
                        <Route path={"/profile"} element={<h1>Profile</h1>}/>
                        <Route path={"/more"} element={<h1>More</h1>}/>
                    </Routes>
                </div>
                <div className="col-3">
                    <h1>Who to follow</h1>
                </div>
            </div>


        </div>
    );
}
export default Tuiter