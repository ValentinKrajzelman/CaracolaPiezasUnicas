import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ApigetEventos } from '../../api/eventos'


const initialState = {
  eventos: [],
}

export const getEventos = createAsyncThunk(
    'user/fetch',
    async () => {
      const response = await ApigetEventos();
      console.log("llamado a la API");
      return response.data
    }
  )

export const eventosSlice = createSlice({
  name: 'eventos',
  initialState,
  reducers: {
  },
  extraReducers: 
  (builder)=>{
    builder
        .addCase(getEventos.fulfilled, (state, action) => {
        state.eventos = action.payload
        })
  }
})

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default eventosSlice.reducer