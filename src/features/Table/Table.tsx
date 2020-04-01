import React from "react";
import { IUserItem } from "../../app/searchSlice";

import { Link } from "react-router-dom";

type PropTypes = {
  data: IUserItem[];
  headers: string[];
};

const Table = (props: PropTypes) => {
  return (
    <table className="table-auto mx-auto">
      <thead>
        <tr>
          {props.headers.map(el => (
            <th className="px-4 py-2">{el}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map(el => (
          <tr>
            <td className="border px-4 py-2 justify-center">
              <img alt="avatar" width="30" height="30" src={el.avatar_url} />
            </td>
            <td className="border px-4 py-2 text-center">
              <Link to={"/profile/" + el.login}>{el.login}</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
