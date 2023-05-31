import React from "react";
import TuitSummaryItem
    from "./tuit-summary-item";
//import tuitsArray from './tuits-home.json';
import {useSelector} from "react-redux";

const TuitSummaryList = () => {
    const {tuits}=useSelector((state)=>state.tuits)
    return(
        <ul className="list-group">
            {
                tuits.map(tuit =>
                    <TuitSummaryItem
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitSummaryList;