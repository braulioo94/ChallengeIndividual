import React,{useContext,useEffect,useState} from 'react' ;
import blogContext from '../useContext/blogContext';
import axios from 'axios' ;

const Detalle = () => {

    const operacionsContext = useContext(blogContext) ;
    const {idPost,guardarIdPost} = operacionsContext ;
    

    const [detallesPost, guardarDetallesPost] = useState('')

    useEffect(() => {
        getPostId()
    }, [])


    //Función llama a la api
    const getPostId = () =>{
        const consultAPI =async () =>{
            const url = `https://jsonplaceholder.typicode.com/posts/${idPost}`
            await axios.get(url)
            .then(respuesta =>{
                
                
                guardarDetallesPost(respuesta.data)
                guardarIdPost(0)
                
            })
            .catch(error =>{
                return    console.log(error)
                })
            } 
            consultAPI()
        }

    return (
        <>
        
            <div class="card">
                <h5 class="card-header">Detalles del post seleccionado</h5>
                <div class="card-body">
                    <h5 class="card-title">{detallesPost.title}</h5>
                    <p class="card-text">{detallesPost.body}</p>
                    <p class="card-text">Número de id del post: {detallesPost.id}</p>
                    <p class="card-text">Número de id del creador del post: {detallesPost.userId}</p>
                    <a href="/" class="btn btn-primary">Volver al menu principal</a>
                </div>
            </div>
                
        </>
        );



}
 
export default Detalle;