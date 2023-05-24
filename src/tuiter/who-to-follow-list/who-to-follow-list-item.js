import React from "react";

const WhoToFollowListItem = ({
                                 who = {userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
                             }) => {
    console.log(who.avatarIcon)
    return (
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2">
                        <img src={require(`../../images/${who.avatarIcon}`)} alt="java" height={48} width={48}
                            className="rounded-circle"/>
                    </div>
                    <div className="col-xl-7 col-lg-7">
                        <b>{who.userName}</b>
                        <br/>
                            <b style={{"color": "darkgray"}}>@{who.handle}</b>
                    </div>
                    <div className="col-xl-3 col-lg-3" style={{"paddingLeft": 0}}>
                        <button type="button" className="btn btn-primary rounded-pill">Follow</button>
                    </div>
                </div>
            </li>
        </>
);
}

export default WhoToFollowListItem