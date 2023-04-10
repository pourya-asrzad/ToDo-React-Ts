import { createSlice } from "@reduxjs/toolkit";

export interface itemSlice{
    items: [],
    todoType:string|null 
}

const initialState:itemSlice = {
   items:[],
   todoType:null
}
const itemSlice  = createSlice({
    name:'itemSlice',
    initialState ,
    reducers:{
        setItems(state:any,action:any){
            state.items = action.payload
        },
        setTodoType(state:any,action:any){
            state.todoType = action.payload
        }
    }

})
export const {setItems} = itemSlice.actions
export const {setTodoType} = itemSlice.actions
export default itemSlice.reducer
