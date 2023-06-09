import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useNavigate} from "react-router";
import {profileThunk, logoutThunk, updateUserThunk}
    from "./services/auth-thunks";

function ProfileScreen() {
    const {currentUser} = useSelector((state) => state.user);
    const [profile, setProfile] = useState(currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const save = () => {
        dispatch(updateUserThunk(profile));
    };

    /*useEffect(async () => {
        const {payload} = await dispatch(profileThunk());
        console.log("In profile")
        setProfile(payload);
    }, []);*/

    useEffect(() => {
        async function fetchData() {
            const {payload} = await dispatch(profileThunk());
            setProfile(payload);
        }
        fetchData();
    },[]);

    return (
        <div>
            <h1>Profile Screen</h1>
            {profile && (<div className={"mb-3"}>
                    <div>
                        <label for="firstname" className="form-label">First Name</label>
                        <input type="text"  className="form-control" id="firstname" value={profile.firstName}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...profile, firstName: event.target.value,
                                   };
                                   setProfile(newProfile);
                               }}/>
                    </div>
                    <div>
                        <label for="lastname" className="form-label">Last Name</label>
                        <input className="form-control" id="lastname" type="text" value={profile.lastName}
                               onChange={(event) => {
                                   const newProfile = {
                                       ...profile, lastName: event.target.value,
                                   };
                                   setProfile(newProfile);
                               }}/>
                    </div>
                </div>
            )}
            <button className={"btn btn-danger"}
                onClick={() => {
                    dispatch(logoutThunk());
                    navigate("/tuiter/login");
                }}> Logout
            </button>
            <button className={"btn btn-primary"} onClick={save}>Save</button>
        </div>
    );
}

export default ProfileScreen;