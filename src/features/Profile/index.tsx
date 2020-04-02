import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import {
  getUserProfile,
  getUserRepos,
  getUserFollowers,
  getUserFollowing
} from "../../app/userSlice";
import Repo from "../Repo";
import HyperModal from "react-hyper-modal";
import UserList from "../UserList";

const Profile = () => {
  const { profileId } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.profile);
  const reposData = useSelector((state: RootState) => state.user.repos);
  const followerData = useSelector((state: RootState) => state.user.followers);
  const followingData = useSelector((state: RootState) => state.user.following);

  const [isFollowerModalOpen, setIsFollowerModalOpen] = useState(false);
  const [isFollowingModalOpen, setIsFollowingModalOpen] = useState(false);

  useEffect(() => {
    if (profileId) {
      dispatch(getUserProfile(profileId));
      dispatch(getUserRepos(profileId));
      dispatch(getUserFollowers(profileId));
      dispatch(getUserFollowing(profileId));
    }
  }, [profileId, dispatch]);

  return (
    <div className="grid grid-cols-6  gap-4 min-h-screen">
      <div className="col-start-1 col-end-3 p-10 rounded-lg text-black">
        <img
          className="rounded-full mt-12"
          src={userData.avatar_url}
          alt="avatar"
          width="300"
          height="300"
        ></img>
        <div className="text-center text-xl font-medium py-4">
          {userData.name}
        </div>
        <div className="text-center py-1">{userData.login}</div>
        <HyperModal
          isOpen={isFollowerModalOpen}
          requestClose={() => setIsFollowerModalOpen(false)}
        >
          <p className="text-center text-xl mt-4">Followers</p>
          <div className="flex flex-wrap flex-row justify-center items-center mt-4">
            {followerData.length > 0
              ? followerData.map(el => (
                  <UserList
                    key={el.login}
                    username={el.login}
                    avatarUrl={el.avatar_url}
                    onClick={() => setIsFollowerModalOpen(false)}
                  />
                ))
              : "No followers"}
          </div>
        </HyperModal>
        <div
          onClick={() => setIsFollowerModalOpen(true)}
          className="text-center py-1"
        >
          {userData.followers} Followers
        </div>
        <HyperModal
          isOpen={isFollowingModalOpen}
          requestClose={() => setIsFollowingModalOpen(false)}
        >
          <p className="text-center text-xl mt-4">Following</p>
          <div className="flex flex-wrap flex-row justify-center items-center mt-4">
            {followingData.length > 0
              ? followingData.map(el => (
                  <UserList
                    key={el.login}
                    username={el.login}
                    avatarUrl={el.avatar_url}
                    onClick={() => setIsFollowingModalOpen(false)}
                  />
                ))
              : "Start following someone"}
          </div>
        </HyperModal>
        <div
          onClick={() => setIsFollowingModalOpen(true)}
          className="text-center py-1"
        >
          {userData.following} Following
        </div>
      </div>
      <div className="col-start-3 col-end-7 pt-10">
        <p className="text-center text-2xl capitalize mb-8">
          {`${userData.login}'s`} Repos
        </p>
        <div className="flex flex-wrap md:justify-between  xs:w-full justify-center">
          {reposData.map(el => (
            <div key={el.name} className="md:w-1/2 w-full pr-4">
              <Repo data={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
