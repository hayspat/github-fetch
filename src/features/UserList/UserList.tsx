import React from "react";
import { Link } from "react-router-dom";

type PropTypes = {
  username: string;
  avatarUrl: string;
};

const UserList = (props: PropTypes) => {
  return (
    <div className="overflow-hidden max-w-sm bg-white rounded w-full shadow-lg hover:bg-blue-700 p-4 border-b mb-4 text-black hover:text-white mx-4">
      <Link to={"/profile/" + props.username}>
        <div className="flex flex-row items-center">
          <img
            src={props.avatarUrl}
            height={50}
            width={50}
            alt="avatar"
            className="mb-2 rounded-full"
          />
          <p className="font-bold text-lg ml-6">{props.username}</p>
        </div>
      </Link>
    </div>
  );
};

export default UserList;
