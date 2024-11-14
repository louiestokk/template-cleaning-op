'use client'

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    service:'',
    email:'',
    description:''
}

export const formSlice = createSlice({
    name:'formData',
    initialState,
    reducers:{
        dispatchService:(state,payload)=>{
            state.service = payload
        },
        dispatchEmail:(state,payload)=>{
            state.email = payload
        },
        dispatchDescription:(state,payload)=>{
            state.description = payload
        },
    }
})

export const {dispatchService,dispatchEmail,dispatchDescription} = formSlice.actions
export default formSlice.reducer