import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

export interface itemSlice{
    items: [],
 
}

const initialState:itemSlice = {
   items:[],
    
}
const itemSlice  = createSlice({
    name:'itemSlice',
    initialState ,
    reducers:{
        setItems(state:any,action:any){
            state.items = action.payload
        },
    }
})
export const {setItems} = itemSlice.actions
export default itemSlice.reducer
