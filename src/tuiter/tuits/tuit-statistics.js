import React from "react";
import {BiMessageRounded} from "react-icons/bi";
import {AiOutlineRetweet} from "react-icons/ai";
import {AiTwotoneHeart} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {AiOutlineUpload} from "react-icons/ai";
import {updateTuitThunk} from "../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStatistics = ({
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

    return (
        <div className={"row"}>
            <div className={"col-3"}><BiMessageRounded/> {tuit.replies}</div>
            <div className={"col-3"}><AiOutlineRetweet/> {tuit.retuits}</div>
            <div className={"col-3"}>
                {tuit.liked && <AiTwotoneHeart onClick={() =>
                    dispatch(updateTuitThunk({...tuit, likes: tuit.likes - 1, liked: !tuit.liked}))
                }
                                               style={{"color": "red"}}/>}
                {!tuit.liked && <AiOutlineHeart onClick={() =>
                    dispatch(updateTuitThunk({...tuit, likes: tuit.likes + 1, liked: !tuit.liked}))
                } style={{"color": "red"}}/>} {tuit.likes}
            </div>
            <div className={"col-3"}>
                <AiOutlineUpload></AiOutlineUpload>
            </div>

        </div>
    )
}

export default TuitStatistics;