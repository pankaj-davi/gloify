import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice";

const store = configureStore({
    reducer: {
        item: TaskSlice.reducer
    },
});

export default store;