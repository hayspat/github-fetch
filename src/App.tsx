import React, { useState } from "react";
import Searchbar from "./features/search/Searchbar";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import Table from "./features/Table/Table";

const App = () => {
  const data = useSelector((state: RootState) => state.search.items);
  return (
    <div className="bg-gray-100 mx-auto container">
      <Searchbar />
      <Table headers={["Avatar", "Login Name"]} data={data} />
    </div>
  );
};

export default App;
