import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: [
        {
            id: 1,
            name: "Mitesh Puvari"
        },
        {
            id: 2,
            name: "Minesh Patel"
        },
    ]   
}

export const userSlice = createSlice({
  name: 'userReducer',
  initialState: initialState,
  reducers: {
    addUser: (state, actions) => {
        state.userData?.push(actions.payload);
    },
  },
})

export const { addUser, } = userSlice.actions

export default userSlice.reducer