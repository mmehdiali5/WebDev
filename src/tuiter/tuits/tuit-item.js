import React from "react";
import TuitStatistics from "./tuit-statistics";
import {BsFillPatchCheckFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {deleteTuit} from './tuits-reducer'


const TuitItem = ({
                      tuit = {
                          "_id": 123, "topic": "Space", "userName": "SpaceX",
                          "title": "Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                          "time": "2h", "image": "tesla.png",
                          "liked": true,
                          "replies": 123,
                          "retuits": 432,
                          "likes": 2345,
                          "handle": "@spacex",
                          "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
                      }
                  }) => {
    const dispatch = useDispatch();

    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (
        <li className="list-group-item">
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