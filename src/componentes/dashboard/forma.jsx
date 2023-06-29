import React, { useRef, useState, useEffect } from "react";
import { Editor } from "@tinymce/tinymce-react";

import { useDispatch, useSelector } from "react-redux";

import { PhotoIcon } from "@heroicons/react/24/solid";

//tiny
const apikey = import.meta.env.VITE_API_KEY_TINY;
//cloudinary
const preset_name = import.meta.env.VITE_UPLOAD_PRESET;
const cloud_name = import.meta.env.VITE_CLOUD_NAME;

const Forma = ({ estado, cerrar, current }) => {
  const editorRef = useRef(null);
  
  // asi es como se accede al contenido del editor de texto
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };

  const [image, setImage] = useState("");
  const [url, setUrl] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState(current ? current.descripcion : <div></div>);

  //medio lo unico que falta de este componente es hacer la interaccion con el state para que 
  //mande este objeto a la api y lo suba, y listo ya estaria, despues hay que hacer otro que 
  //en vez de hacer el objeto de cero haga el update de uno preexistente, o adaptar este para 
  //que pueda recibir y hacer el update, fijate
  const submitHandler = () => {
    let nueElem = {
      URL: url,
      descripcion: editorRef.current.getContent(),
      nombre: titulo,
    }
    console.log(nueElem);
  };

    useEffect(() => {
      // carga la imagen y devuelve la URL correspondiente
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", preset_name);
      data.append("cloud_name", cloud_name);

      fetch("https://api.cloudinary.com/v1_1/" + cloud_name + "/image/upload", {
        method: "POST",
        body: data,
      })
        .then((resp) => resp.json())
        .then((data) => {
          setUrl(data.url);
        })
        .catch((err) => console.log(err));
    }, [image]);

    return (
      <div>
        {/* <div>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={uploadImage}>Upload</button>
      </div>
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} alt="Uploaded" />
      </div> */}
        <form onSubmit={submitHandler}>
          {/* titulo */}
          <div className="py-10">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Titulo
            </label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="username"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="Hoy caracola celebra..."
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* imagen */}
          <div className="col-span-full pb-10">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Imagen
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                {url ? (
                  <img src={url} />
                ) : (
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                )}
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                  </label>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>

          {/* texto */}
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 pb-2 text-gray-900"
          >
            Texto
          </label>
          <Editor
            apiKey={apikey}
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={current.descripcion}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
          {/* <button onClick={log}>Log editor content</button> */}

          {/* botones para salir del modal */}
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              onClick={() => {
                submitHandler();
              }}
            >
              Guardar
            </button>
            <button
              type="button"
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              onClick={() => {
                cerrar();
              }}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    );
  };

export default Forma;

// dejo el snippet de abajo para tener de referencia el material para este componente

// estos son dos hooks usestate sirve para poner una serie de variable en el state
// del componente, useEffect sirve para definir un efecto, es decir una funcion
// que se triggerea cuando se produce un cambio en componentes especificos
// import React, { useState, useEffect } from 'react';
// estos son componentes de material ui
// import { TextField, Button, Typography, Paper } from '@material-ui/core';
// useDispatch sirve para despachar acciones, es decir para afectar al state, mediante
// una de las vias establecidas en los reducers, por su parte useSelector sirve para
// acceder al state, devuelve un objeto que contiene todas las variables definidas en el
// reducer index
// import { useDispatch, useSelector } from 'react-redux';
// import FileBase from 'react-file-base64';

// import useStyles from './styles';
// estas son acciones que si se usan con el useDispatch te permiten afectar el state
// import { createPost, updatePost } from '../../actions/posts';

// const Form = ({ currentId, setCurrentId }) => {

//   declaracion del state
//   const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

//   lo de abajo define una variable usando useselector al que se le pasa una funcion
//   esta funcion hace una operacion ternaria (ternary operator) donde si el current id
//   es falsy (no esta declarado) busca el current id entre todos los posts que se encuentran
//   en el state (que es el argumento de useSelector)
//   const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

//   const dispatch = useDispatch();
//   const classes = useStyles();

//   useEffect reproduce el codigo dentro del bloque cada vez que las variables que tiene
//   como segundo parametro cambian
//   useEffect(() => {
//     if (post) setPostData(post);
//   }, [post]);

//   funcion para limpiar la form, lo hace modificando el state de PostData
//   const clear = () => {
//     setCurrentId(0);
//     setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
//   };

//   const handleSubmit = async (e) => {
//     evita que se mande cuando la form esta vacia
//     e.preventDefault();

//     if (currentId === 0) {
//       asi se despacha una accion para mandar datos al state, en este caso
//       tambien hace la conexion con el back
//       dispatch(createPost(postData));
//       clear();
//     } else {
//       dispatch(updatePost(currentId, postData));
//       clear();
//     }
//   };

//   return (
//     <Paper className={classes.paper}>
//       <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
//       para cada uno de los textfields de abajo se hace una actulizacion del estado cada vez que cambian
//       de esta manera el estado postData refleja el contenido de la form, a su vez la form se renderiza con
//       los valores del estado
//         <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
//         <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
//         <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
//         <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
//         <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
//         <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
//         <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
//         <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
//       </form>
//     </Paper>
//   );
// };

// export default Form;
