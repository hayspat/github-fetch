import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import axios from "axios";

type StringAndNull = string | null;

export interface IUserProfile {
  login: string;
  id: number;
  node_id: string;
  avatar_url: StringAndNull;
  gravatar_id: StringAndNull;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: StringAndNull;
  company: StringAndNull;
  blog: StringAndNull;
  location: StringAndNull;
  email: StringAndNull;
  hireable: boolean | null;
  bio: StringAndNull;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

const initialState: IUserProfile | {} = {};

export const slice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUserProfile: (state, action: PayloadAction<any>) => {
      return action.payload;
    }
  }
});

export const { setUserProfile } = slice.actions;

export const getUserProfile = (param: string): AppThunk => dispatch => {
  axios.get("https://api.github.com/users/" + param).then(response => {
    dispatch(setUserProfile(response.data));
    console.log(response.data, "dataFromResponse");
  });
};

export default slice.reducer;
