import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "./store";
import axios from "axios";
interface ISearchState {
  total_count: number;
  incomplete_results: boolean;
  items: IUserItem[];
}

export interface IUserItem {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
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
  score: number;
}

const initialState: ISearchState = {
  total_count: 0,
  incomplete_results: false,
  items: []
};

export const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setSearch: (_, action: PayloadAction<any>) => {
      return action.payload;
    }
  }
});

export const { setSearch } = slice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const searchAsync = (param: string): AppThunk => dispatch => {
  /*   setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000); */
  axios.get("https://api.github.com/search/users?q=" + param).then(response => {
    dispatch(setSearch(response.data));
    console.log(response.data, "dataFromResponse");
  });
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export default slice.reducer;
