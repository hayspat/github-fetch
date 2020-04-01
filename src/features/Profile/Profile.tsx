import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "../Table/Table";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { getUserProfile } from "../../app/userSlice";

const Profile = () => {
  const { profileId } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user);
  useEffect(() => {
    if (profileId) dispatch(getUserProfile(profileId));
  }, [profileId, dispatch]);

  return <div></div>;
};

export default Profile;
