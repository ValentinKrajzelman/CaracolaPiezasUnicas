import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ApigetEventos,
  ApideleteEventos,
  ApiupdateEventos,
  ApicreateEventos,
} from "../../api/eventos";

//este es el objeto que se declara en el slicer despues solo hay
//re inicializaciones de este mismo objeto
const initialState = {
  eventos: [],
};

//por cada accion que requiera el thunk se hace una funcion con createAsyncThunk
//y la logica que hace el llamado async despues se exporta la funcion en
//cuestion y se integra al reducer mediante el builder
export const getEventos = createAsyncThunk("evento/get", async () => {
  const response = await ApigetEventos();
  console.log("llamado a la API");
  return response.data;
});

export const createEventos = createAsyncThunk(
  "evento/create",
  async (evento) => {
    const newEvento = await ApicreateEventos(evento);
    console.log("llamado a la API");
    return newEvento.data;
  }
);

export const updateEventos = createAsyncThunk(
  "evento/update",
  async (updatedEvento) => {
    console.log("entro al update eventos", updatedEvento);
    const { id, elemento } = updatedEvento;
    const newEvento = await ApiupdateEventos(id, elemento);
    return { id, newEvento };
  }
);
export const deleteEventos = createAsyncThunk("evento/delete", async (id) => {
  await ApideleteEventos(id);
  console.log("llamado a la API");
  return id;
});

export const eventosSlice = createSlice({
  name: "eventos",
  initialState,
  reducers: {
    //aca van los reducers regulares, se escriben como una mutacion del estado
    //pero internamente redux toolkit no lo hace asi, ejemplo de reducer regular:
    // increment: (state) => {
    //   state.value += 1
    // },
  },
  extraReducers: (builder) => {
    builder
      //aca se hacen los add case para cada posible estado que adopten funciones thunk
      //pueden ser varios, los principales son .fulfilled, .pending y .rejected
      //en este caso vamos a hacer nada mas fulfilled
      .addCase(getEventos.fulfilled, (state, action) => {
        state.eventos = action.payload;
      })
      .addCase(createEventos.fulfilled, (state, action) => {
        state.eventos = [...state.eventos, action.payload];
      })
      .addCase(updateEventos.fulfilled, (state, action) => {
        state.eventos.find((evento, indice) => {
          if (evento._id == action.payload.id) {
            state.eventos[indice] = action.payload.newEvento.data;
            // return true;
          }
        });
      })
      .addCase(deleteEventos.fulfilled, (state, action) => {
        let aux;
        state.eventos.find((evento, indice) => {
          if (action.payload == evento._id) {
            aux = indice;
          }
        });
        state.eventos.splice(aux, 1);
      });
  },
});

//estos son los export de las acciones regulares no thunk en este caso no tenemos ninguna
// export const { increment, } = counterSlice.actions

export default eventosSlice.reducer;
