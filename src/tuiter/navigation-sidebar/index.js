import React from "react";
import {Link, useLocation} from "react-router-dom";
import {AiOutlineUnorderedList,AiFillHome} from "react-icons/ai";
import {IoIosNotifications} from "react-icons/io";
import {MdExplore} from "react-icons/md";
import {FaEnvelope} from "react-icons/fa";
import {ImBookmarks} from "react-icons/im";
import {CgProfile} from "react-icons/cg";
import {BsThreeDots} from "react-icons/bs";


const NavigationSidebar = () => {
    const {pathname} = useLocation()
    const [ignore, tuiter, active] = pathname.split("/");
    const links = ["home", "explore", "notifications", "messages", "bookmarks", "lists", "profile", "more"]
    return (

        <div className="list-group">
            <Link to={"/tuiter/home"} className={`list-group-item ${active === 'home' ? "active" : ""}`}>
               <AiFillHome/> <span className={"d-none d-xl-inline"}>Home</span>
            </Link>

            <Link to={"/tuiter/explore"}
                  className={`list-group-item ${active === 'explore' ? "active" : ""}`}>
                <MdExplore/> <span className={"d-none d-xl-inline"}>Explore</span></Link>

            <Link to={"/tuiter/notifications"}
                  className={`list-group-item ${active === 'notifications' ? "active" : ""}`}>
                <IoIosNotifications/> <span className={"d-none d-xl-inline"}>Notifications</span> </Link>

            <Link to={"/tuiter/messages"}
                  className={`list-group-item ${active === 'messages' ? "active" : ""}`}>
                <FaEnvelope/> <span className={"d-none d-xl-inline"}>Messages</span></Link>

            <Link to={"/tuiter/bookmarks"}
                  className={`list-group-item ${active === 'bookmarks' ? "active" : ""}`}>
                <ImBookmarks/> <span className={"d-none d-xl-inline"}>Bookmarks</span></Link>

            <Link to={"/tuiter/lists"} className={`list-group-item ${active === 'lists' ? "active" : ""}`}>
                <AiOutlineUnorderedList/> <span className={"d-none d-xl-inline"}>Lists</span></Link>

            <Link to={"/tuiter/profile"}
                  className={`list-group-item ${active === 'profile' ? "active" : ""}`}>
                <CgProfile/> <span className={"d-none d-xl-inline"}>Profile</span></Link>

            <Link to={"/tuiter/more"} className={`list-group-item ${active === 'more' ? "active" : ""}`}>
                <BsThreeDots/> <span className={"d-none d-xl-inline"}>More</span></Link>
        </div>

        /*<div className={"list-group"}>
            {
                links.map((link)=>
                    <Link to={`/tuiter/${link}`}
                          key={link}
                          className={`list-group-item text-capitalize ${active===link?"active":""}`}>
                        {link}
                    </Link>
                )}
        </div>*/


    )
};
export default NavigationSidebar;