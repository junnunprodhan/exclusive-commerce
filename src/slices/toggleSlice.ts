import {createSlice} from "@reduxjs/toolkit";


const initialState={
    mobileMenu: false,
}
const toogleSlice = createSlice({
    name:"toggle",
    initialState,
    reducers:{
        toggleMobileMenu:(state) =>{
            state.mobileMenu =!state.mobileMenu
            },
    }
})

export  const {toggleMobileMenu} = toogleSlice.actions
export default  toogleSlice.reducer