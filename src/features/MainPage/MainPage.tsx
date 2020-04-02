import React from "react";
import Searchbar from "../search/Searchbar";
import Table from "../Table/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import UserList from "../UserList/UserList";

const MainPage = () => {
  const data = useSelector((state: RootState) => state.search.items);
  const userLists = data.map(el => (
    <UserList avatarUrl={el.avatar_url} username={el.login} />
  ));
  return (
    <div>
      <Searchbar />
      <div className="flex flex-wrap flex-row justify-center items-center">
        {userLists}
      </div>
    </div>
  );
};

export default MainPage;
