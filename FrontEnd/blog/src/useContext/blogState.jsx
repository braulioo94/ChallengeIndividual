import React,{useState,useContext} from 'react'
import blogContext from './blogContext' ;
import axios from 'axios'



const BlogState = ( props) => {

    const [posts, guardarPosts] = useState([{}]);
    const [idPost, guardarIdPost] = useState(0);
    const [detalles, guardarDetalles] = useState(false)
    const [edicion, guardarEdicion] = useState(false)
    const [eliminar, guardarEliminar] = useState(false)


    //Función llama a la api
    const getPost = () =>{
        const consultAPI =async () =>{
            const url = 'https://jsonplaceholder.typicode.com/posts'
            await axios.get(url)
            .then(respuesta =>{
                
                guardarPosts(respuesta.data)
                console.log(respuesta.data);
                
            })
            .catch(error =>{
                return    console.log(error)
                })
            } 
            consultAPI()
        }

        
    

    return ( 

        <blogContext.Provider
        value= {{
            getPost,
            posts,
            guardarIdPost,
            idPost,
            guardarEliminar,
            eliminar,
            guardarDetalles,
            detalles,
            guardarEdicion,
            edicion
            }}>
                
        {props.children}

        </blogContext.Provider>
     );
}
 
export default BlogState;