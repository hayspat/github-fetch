import React from "react";
import Searchbar from "../search/Searchbar";
import Table from "../Table/Table";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const MainPage = () => {
  const data = useSelector((state: RootState) => state.search.items);
  return (
    <>
      <Searchbar />
      <Table headers={["Avatar", "Login Name"]} data={data} />
    </>
  );
};

export default MainPage;
