import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { getUserProfile, getUserRepos } from "../../app/userSlice";
import Repo from "../Repo/Repo";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff"
  }
};

const Profile = () => {
  const { profileId } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state: RootState) => state.user.profile);
  const reposData = useSelector((state: RootState) => state.user.repos);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (profileId) {
      dispatch(getUserProfile(profileId));
      dispatch(getUserRepos(profileId));
    }
  }, [profileId, dispatch]);

  return (
    <div className="grid grid-cols-6 gap-4 min-h-screen">
      <div className="col-start-1 col-end-3 p-10 rounded-lg text-black">
        <img
          className="rounded-full pt-10"
          src={userData.avatar_url}
          alt="avatar"
          width="300"
          height="300"
        ></img>
        <div className="text-center text-xl font-medium py-4">
          {userData.name}
        </div>
        <div className="text-center py-1">{userData.login}</div>
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          style={customStyles}
          contentLabel="Follower Modal"
        >
          Test
        </Modal>
        <div onClick={() => setIsModalOpen(true)} className="text-center py-1">
          {userData.followers} Followers
        </div>
        <div className="text-center py-1">{userData.following} Following</div>
      </div>
      <div className="col-start-3 col-end-7 pt-10">
        <p className="text-center text-2xl capitalize mb-8">
          {`${userData.login}'s`} Repos
        </p>
        <div className="flex flex-wrap justify-between">
          {reposData.map(el => (
            <div className="w-1/2 pr-4">
              <Repo data={el} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
