import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ApigetNoticias,
  ApideleteNoticias,
  ApiupdateNoticias,
  ApicreateNoticias,
} from "../../api/noticias";

//este es el objeto que se declara en el slicer despues solo hay
//re inicializaciones de este mismo objeto
const initialState = {
  noticias: [],
};

//por cada accion que requiera el thunk se hace una funcion con createAsyncThunk
//y la logica que hace el llamado async despues se exporta la funcion en
//cuestion y se integra al reducer mediante el builder
export const getNoticias = createAsyncThunk(
  "noticia/get", 
  async () => {
  const response = await ApigetNoticias();
  console.log("llamado a la API");
  return response.data;
});

export const createNoticias = createAsyncThunk(
  "noticia/create",
  async (noticia) => {
    const newNoticia = await ApicreateNoticias(noticia);
    console.log("llamado a la API");
    return newNoticia.data;
  }
);

export const updateNoticias = createAsyncThunk(
  "Noticia/update",
  async (updatedNoticia) => {
    console.log("llamado a la API");
    const [id, noticia] = updatedNoticia; 
   const newNoticia = await ApiupdateNoticias(id, noticia);
    return { id, newNoticia };
  }
);
export const deleteNoticias = createAsyncThunk("noticia/delete", async (id) => {
  await ApideleteNoticias(id);
  console.log("llamado a la API");
  return id;
});

export const noticiasSlice = createSlice({
  name: "noticias",
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
      .addCase(getNoticias.fulfilled, (state, action) => {
        state.noticias = action.payload;
      })
      .addCase(createNoticias.fulfilled, (state, action) => {
        state.noticias = [...state.noticias, action.payload];
      })
      .addCase(updateNoticias.fulfilled, (state, action) => {
        state.noticias.find((noticia, indice) => {
          if (noticia._id == action.payload.id) {
            state.noticias[indice] = action.payload.newNoticia.data;
            // return true;
          }
        });
      })
      .addCase(deleteNoticias.fulfilled, (state, action) => {
        let aux;
        state.noticias.find((noticia, indice) => {
          if (action.payload.id === noticia.id) {
            aux = indice;
            // return true;
          }
        });
        state.noticias.splice(aux, 1);
      });
  },
});

//estos son los export de las acciones regulares no thunk en este caso no tenemos ninguna
// export const { increment, } = counterSlice.actions

export default noticiasSlice.reducer;
