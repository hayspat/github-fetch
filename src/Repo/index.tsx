import React from "react";
import { Repo as RepoType } from "../store/userSlice";

const Repo = (props: { data: RepoType }) => {
  return (
    <div className=" bg-white hover:bg-blue-700 text-black hover:text-white hover:shadow-outline rounded-lg shadow-lg">
      <div className="px-4 py-4 mb-4 mr-2 text-sm">
        <div className="flex">
          <div className="mr-2 flex justify-center items-center">
            <svg
              className="h-3 w-3 fill-current text-grey-dark"
              viewBox="0 0 32 32"
            >
              <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
            </svg>
          </div>
          <div>{props.data.name}</div>
        </div>
        <div className="flex text-sm mt-6">
          <div className="mr-4 font-thin text-xs flex flex-row justify-center items-center">
            <svg
              className="mr-2"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
            {props.data.stargazers_count}
          </div>

          <div className="mr-4 font-thin text-xs flex flex-row justify-center items-center">
            <svg
              className="mr-2"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 3c0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.323.861 2.433 2.05 2.832.168 4.295-2.021 4.764-4.998 5.391-1.709.36-3.642.775-5.052 2.085v-7.492c1.163-.413 2-1.511 2-2.816 0-1.657-1.343-3-3-3s-3 1.343-3 3c0 1.305.837 2.403 2 2.816v12.367c-1.163.414-2 1.512-2 2.817 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.295-.824-2.388-1.973-2.808.27-3.922 2.57-4.408 5.437-5.012 3.038-.64 6.774-1.442 6.579-7.377 1.141-.425 1.957-1.514 1.957-2.803zm-16.8 0c0-.993.807-1.8 1.8-1.8s1.8.807 1.8 1.8-.807 1.8-1.8 1.8-1.8-.807-1.8-1.8zm3.6 18c0 .993-.807 1.8-1.8 1.8s-1.8-.807-1.8-1.8.807-1.8 1.8-1.8 1.8.807 1.8 1.8zm10.2-16.2c-.993 0-1.8-.807-1.8-1.8s.807-1.8 1.8-1.8 1.8.807 1.8 1.8-.807 1.8-1.8 1.8z" />
            </svg>
            {props.data.forks_count}
          </div>

          <div className="mr-4 font-thin text-xs flex flex-row justify-center items-center">
            <svg
              className="mr-2"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" />
            </svg>
            {props.data.open_issues_count}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repo;
