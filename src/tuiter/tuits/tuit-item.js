import React from "react";
import TuitStatistics from "./tuit-statistics";
import {BsFillPatchCheckFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
//import {deleteTuit} from './tuits-reducer'
import {deleteTuitThunk} from "../services/tuits-thunks";


const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li key={tuit._id} className="list-group-item">
            <div className="row">
                <div className={"col-2 col-xxl-1"}>
                    <img src={require(`../../images/${tuit.image}`)} height={48} width={48}
                         className="rounded-circle"/>
                </div>
                <div className="col-10 col-xxl-11">
                    <button type="button" className="btn-close float-end" aria-label="Close"
                            onClick={() => deleteTuitHandler(tuit._id)}/>
                    <div>
                        <b>{tuit.userName} <BsFillPatchCheckFill
                            style={{"color": "#00acee"}}/></b> <b
                        style={{color: "darkgray"}}>{tuit.handle} . {tuit.time}</b>
                    </div>

                    <div className={"mb-1"}>{tuit.tuit}</div>
                    <TuitStatistics tuit={tuit}/>
                </div>
            </div>
        </li>
    )
}

export default TuitItem