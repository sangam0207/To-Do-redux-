import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState={
    todos:[{id:1,text:"Sangam Shukla"}]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addItem:(state,action)=>{
       const newItem={
        id:nanoid(),
        text:action.payload
       }
       state.todos.push(newItem)
        },
        removeItem:(state,action)=>{
          state.todos=state.todos.filter((todo)=>{
            return todo.id!==action.payload;
          })
        },
        updateItem:(state,action)=>{
            const item=state.todos.find((todo)=>{
                return todo.id===action.payload.id;
            })
            item.text=action.payload.text
        }
    }
})

export  const {addItem,removeItem,updateItem}=todoSlice.actions;
export default todoSlice.reducer;