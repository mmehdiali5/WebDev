import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import {Route, Routes} from "react-router";
import HomeScreen from "./home-screen";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
import ProfileScreen from "./profile-screen";
import WhoToFollowList from "./who-to-follow-list";
import "./index.css"
import whoReducer from './reducers/who-reducer'
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
import tuitsHomeReducer from "./tuits/tuits-reducer"
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";
import authReducer from "./reducers/auth-reducer";

const store = configureStore({
    reducer: {
        who: whoReducer, tuits: tuitsReducer, tuitsHome: tuitsHomeReducer,
        user: authReducer
    }
})


function Tuiter() {
    return (
        <Provider store={store}>
            <Nav/>
            {/*<h1>Tuiter</h1>*/}
            <div className="row">
                <div className={"col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2"}>
                    <NavigationSidebar/>
                </div>
                <div className={"col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-7"}>
                    <Routes>
                        <Route path={"/home"} element={<HomeScreen/>}/>
                        <Route path={"/explore"} element={<ExploreScreen/>}/>
                        <Route path={"/notifications"} element={<h1>Notifications</h1>}/>
                        <Route path={"/messages"} element={<h1>Messages</h1>}/>
                        <Route path={"/bookmarks"} element={<BookmarksScreen/>}/>
                        <Route path={"/lists"} element={<h1>Lists</h1>}/>
                        <Route path={"/profile"} element={<ProfileScreen/>}/>
                        <Route path={"/more"} element={<h1>More</h1>}/>
                        <Route path="/login" element={<LoginScreen/>}/>
                        <Route path="/register" element={<RegisterScreen/>}/>
                        <Route path="/profile" element={<ProfileScreen/>}/>
                    </Routes>
                </div>
                <div className={"col-lg-4 col-xl-4 col-xxl-3 d-none d-sm-none d-md-none d-lg-block"}>
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter