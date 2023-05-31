import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
    const {tuitsHome}=useSelector((state)=>state.tuitsHome)
    return(
        <ul className="list-group">
            {
                tuitsHome.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitList;