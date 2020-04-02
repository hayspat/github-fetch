import React from "react";
import Searchbar from "../Searchbar";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import UserList from "../UserList";

const MainPage = () => {
  const data = useSelector((state: RootState) => state.search.items);
  const userLists = data.map(el => (
    <UserList key={el.login} avatarUrl={el.avatar_url} username={el.login} />
  ));
  return (
    <div>
      <Searchbar />
      <div className="flex flex-wrap flex-row justify-center items-center">
        {userLists && userLists.length > 0 ? (
          userLists
        ) : (
          <p className="text-xl">Start searching to list users here</p>
        )}
      </div>
    </div>
  );
};

export default MainPage;
