import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ApigetTalleres,
  ApideleteTalleres,
  ApiupdateTalleres,
  ApicreateTalleres,
} from "../../api/taller";

//este es el objeto que se declara en el slicer despues solo hay
//re inicializaciones de este mismo objeto
const initialState = {
  talleres: [],
};

//por cada accion que requiera el thunk se hace una funcion con createAsyncThunk
//y la logica que hace el llamado async despues se exporta la funcion en
//cuestion y se integra al reducer mediante el builder
export const getTalleres = createAsyncThunk(
  "taller/get", 
  async () => {
  const response = await ApigetTalleres();
  console.log("llamado a la API");
  return response.data;
});

export const createTalleres = createAsyncThunk(
  "Taller/create",
  async (taller) => {
    const newTaller = await ApicreateTalleres(taller);
    console.log("llamado a la API");
    return newTaller.data;
  }
);

export const updateTalleres = createAsyncThunk(
  "Tallere/update",
  async (updatedTaller) => {
    console.log("llamado a la API");
    const {id, elemento} = updatedTaller; 
   const newTaller = await ApiupdateTalleres(id, elemento);
    return { id, newTaller };
  }
);
export const deleteTalleres = createAsyncThunk("Tallere/delete", async (id) => {
  await ApideleteTalleres(id);
  console.log("llamado a la API");
  return id;
});

export const talleresSlice = createSlice({
  name: "talleres",
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
      .addCase(getTalleres.fulfilled, (state, action) => {
        state.talleres = action.payload;
      })
      .addCase(createTalleres.fulfilled, (state, action) => {
        state.talleres = [...state.talleres, action.payload];
      })
      .addCase(updateTalleres.fulfilled, (state, action) => {
        state.talleres.find((taller, indice) => {
          if (taller._id == action.payload.id) {
            state.talleres[indice] = action.payload.newTaller.data;
            // return true;
          }
        });
      })
      .addCase(deleteTalleres.fulfilled, (state, action) => {
        let aux;
        state.talleres.find((taller, indice) => {
          if (action.payload == taller._id) {
            aux = indice;
            // return true;
          }
        });
        state.talleres.splice(aux, 1);
      });
  },
});

//estos son los export de las acciones regulares no thunk en este caso no tenemos ninguna
// export const { increment, } = counterSlice.actions

export default talleresSlice.reducer;
