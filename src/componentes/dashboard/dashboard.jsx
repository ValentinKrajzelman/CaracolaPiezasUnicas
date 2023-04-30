import React from 'react'

      {/* aca dejo el snippet que necesito para cargar imagenes en el dashboard 
      <form onSubmit={() => {}}>
        <label>First name:</label>
        <input type="text" id="fname" name="fname" value="John" />
        <label>Last name:</label>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
        />
        <label>Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe" />
        <input type="submit" value="Submit" />
      </form> */}

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard


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