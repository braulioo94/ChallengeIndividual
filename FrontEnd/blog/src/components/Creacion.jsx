import React,{useState} from 'react';
import axios from 'axios';
import { Alert, AlertTitle } from '@material-ui/lab';

const Creacion = () => {

    const [nuevoPost, guardarNuevoPost] = useState({
        titulo:'',
        contenido:''
    })
    const [error, guardarError] = useState(false)
    const [postOk, guardarPostOk] = useState(false)

    const {titulo, contenido} = nuevoPost


    const onChange = e =>{
        guardarNuevoPost ( {
            ...nuevoPost ,
        [e.target.name]: e.target.value}
        )
    }

    const onSubmit = e =>{
        e.preventDefault()

        if(titulo.trim()=== '' || contenido.trim()==='') return guardarError(true)

        guardarError(false)

        consultarAPI()

        
        
    }

    const consultarAPI = () =>{
        const consultAPI =async () =>{
            const url = 'https://jsonplaceholder.typicode.com/posts'
            await axios.post(url,{
                title: {titulo},
                body: {contenido},
            })     
            .then(respuesta =>{
                
                guardarPostOk(true)
                guardarNuevoPost ( {
                    titulo:'',
                    contenido:''
                })
                setTimeout(() => {
                    
                    guardarPostOk(false)
                    
                }, 1800);
                                        
                    
                })
            .catch(error =>{
                return    console.log(error)
                })
            } 
            consultAPI()
            
    }

    return ( 
    <>
        <h2>Crear nuevo post</h2>

    <div className="form-group w-50 mt-4 ">
        <form onSubmit = {onSubmit}>
            <label
                class="form-label"
                htmlFor="titulo"
                >Ingrese el título del nuevo post</label>
            <input
                type="text"
                className='form-control mb-4'
                placeholder='Ingrese titulo'
                id='titulo' 
                name='titulo'
                value={titulo}
                onChange={onChange}
            />

            <label
                class="form-label"
                htmlFor="contenido"
                >Ingrese el contenido del nuevo post</label>
            <input
                type="text"
                className='form-control'
                placeholder='Ingrese contenido'
                id='contenido'
                name='contenido'
                value={contenido}
                onChange={onChange}
            />

            <button type='submit'  className=' btn btn-primary mt-4 '>Agregar nuevo Post</button>
                
        </form>
            {error ?
                <Alert variant="filled" severity="error">
                    <AlertTitle>Error!</AlertTitle>
                    Todos los campos son obligatorios — Intente nuevamente!
                </Alert>
                : null}
            {postOk ?
                <Alert variant="filled" severity="success">
                    Carga de datos Exitoso!
                </Alert>
            :null}
        
        
    </div>    
    
    </>
    
    );
}
 
export default Creacion;