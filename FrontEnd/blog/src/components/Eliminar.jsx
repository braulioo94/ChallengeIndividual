import React,{useContext,useState} from 'react' ;
import blogContext from '../useContext/blogContext';
import axios from 'axios' ;
import { Alert } from '@material-ui/lab';
import { Redirect} from "react-router-dom";

const Eliminar = () => {

    const operacionsContext = useContext(blogContext) ;
    const {idPost} = operacionsContext ;
    
    
    const [deleteOK, guardarDeleteOK] = useState(false);
    const [backHome, guardarBackHome] = useState(false)

    const EliminarOnClick =() =>{

        const consultAPI =async () =>{
            const url = `https://jsonplaceholder.typicode.com/posts/${idPost}`
            await axios.delete(url)     
            .then(respuesta =>{
                guardarDeleteOK(true)
                
                setTimeout(() => {
                    
                    guardarDeleteOK(false)
                    guardarBackHome(true)
                    
                }, 2000);
            })
            .catch(error =>{
                return    console.log(error)
                })
            } 
            consultAPI()
    }

    const cancelarEliminar = () =>{
        guardarBackHome(true)
    }

    return ( 
        <>
        <h1>¿Está seguro que desea eliminar el post seleccionado?</h1>
        <div className='d-flex gap-4 mt-4 justify-content-center align-items-center mb-4  '>
            <button
                className='btn btn-success col-12 mx-auto '
                type="button"
                onClick={EliminarOnClick}
            >Eliminar</button>

            <button
                className='btn btn-danger col-12 mx-auto'
                type="button"
                onClick={cancelarEliminar}
            >Cancelar</button>
        </div>

        {deleteOK
            ?
                <Alert variant="filled" severity="success">
                        Se elimino correctamente!
                </Alert>
            :null
        }

        {backHome 
            ?
            <Redirect to="/" />
            :null
        }
        </>
        );
        
        
        
}
 
export default Eliminar;