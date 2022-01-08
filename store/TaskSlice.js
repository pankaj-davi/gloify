import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taksItem: [],
    users : [],
}

const TaskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {

        addTaskAndUserFromAPi(state , action){

            const { task, user } = action.payload;
            
            for (const singleTask of task.tasks ) {
                state.taksItem = [singleTask, ...state.taksItem];
            }

            for (const singleUser of user.users ) {
                state.users = [singleUser, ...state.users];
            }
        },

    }
})

export const TaskSliceAction = TaskSlice.actions;

export default TaskSlice;