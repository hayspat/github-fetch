import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import axios from "axios";

type StringAndNull = string | null;

export type Repo = {
  html_url: string;
  name: string;
  description: StringAndNull;
  forks_count: number;
  stargazers_count: number;
  language: string;
  open_issues_count: number;
};

export type Profile = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
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
};

export interface IUserProfile {
  profile: Profile;
  repos: Repo[];
}

const initialState: IUserProfile = {
  profile: {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: null,
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    name: null,
    company: null,
    blog: null,
    location: null,
    email: null,
    hireable: null,
    bio: null,
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: ""
  },
  repos: []
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
    }
  }
});

export const { setUserProfile, setUserRepos } = slice.actions;

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

export default slice.reducer;
