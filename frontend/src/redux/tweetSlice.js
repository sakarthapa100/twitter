import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
    name: "tweet",
    initialState: {
        tweets: null,
        refresh: false,
        isActive: true, 
    },
    reducers: {
        getAllTweets: (state, action) => {
            state.tweets = action.payload;
        },

        addTweet: (state, action) => {
            state.tweets.unshift(action.payload)},


        getRefresh: (state) => {
            state.refresh = !state.refresh;
        },
        getIsActive: (state, action) => {
            state.isActive = action.payload;
        }
    }
});

export const { getAllTweets,addTweet, getRefresh, getIsActive } = tweetSlice.actions;
export default tweetSlice.reducer;
