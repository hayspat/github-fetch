import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import axios from "axios";

type StringAndNull = string | null;

export type Repo = {
  name: string;
  description: StringAndNull;
  forks_count: number;
  stargazers_count: number;
  language: string;
  open_issues_count: number;
};

export type Profile = {
  login: string;
  avatar_url: string;
  name: StringAndNull;
  company: StringAndNull;
  bio: StringAndNull;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

export type FollowerType = {
  login: string;
  avatar_url: string;
};

export interface IUserProfile {
  profile: Profile;
  repos: Repo[];
  followers: FollowerType[];
  following: FollowerType[];
}

const initialState: IUserProfile = {
  profile: {
    login: "",
    avatar_url: "",
    name: null,
    company: null,
    bio: null,
    public_repos: 0,
    followers: 0,
    following: 0,
    created_at: ""
  },
  repos: [],
  followers: [],
  following: []
};

export const slice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setUserProfile: (state, action: PayloadAction<any>) => {
      state.profile = action.payload;
    },
    setUserRepos: (state, action: PayloadAction<any>) => {
      state.repos = action.payload;
    },
    setUserFollowers: (state, action: PayloadAction<any>) => {
      state.followers = action.payload;
    },
    setUserFollowing: (state, action: PayloadAction<any>) => {
      state.following = action.payload;
    }
  }
});

export const {
  setUserProfile,
  setUserRepos,
  setUserFollowers,
  setUserFollowing
} = slice.actions;

export const getUserProfile = (param: string): AppThunk => dispatch => {
  axios.get("https://api.github.com/users/" + param).then(response => {
    dispatch(setUserProfile(response.data));
  });
};

export const getUserRepos = (param: string): AppThunk => dispatch => {
  axios
    .get("https://api.github.com/users/" + param + "/repos")
    .then(response => {
      dispatch(setUserRepos(response.data));
      console.log(response.data, "dataFromRepos");
    });
};

export const getUserFollowers = (param: string): AppThunk => dispatch => {
  axios
    .get("https://api.github.com/users/" + param + "/followers")
    .then(response => {
      dispatch(setUserFollowers(response.data));
      console.log(response.data, "followers");
    });
};

export const getUserFollowing = (param: string): AppThunk => dispatch => {
  axios
    .get("https://api.github.com/users/" + param + "/following")
    .then(response => {
      dispatch(setUserFollowing(response.data));
      console.log(response.data, "following");
    });
};

export default slice.reducer;
