import React,{useContext,useState} from 'react' ;
import blogContext from '../useContext/blogContext';
import axios from 'axios' ;
import { Alert, AlertTitle } from '@material-ui/lab';

const Edicion = () => {

    const operacionsContext = useContext(blogContext) ;
    const {idPost} = operacionsContext ;
    

    const [cambiarPost, guardarCambiarPost] = useState({
        titulo:'',
        contenido:''
    })
    const [error, guardarError] = useState(false)
    const [edicionOk, guardarEdicionOk] = useState(false)

    const {titulo, contenido} = cambiarPost


    const onChange = e =>{
        guardarCambiarPost ( {
            ...cambiarPost ,
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
            const url = `https://jsonplaceholder.typicode.com/posts/${idPost}`
            await axios.put(url,{
                title: {titulo},
                body: {contenido},
            })     
            .then(respuesta =>{
                
                guardarEdicionOk(true)
                guardarCambiarPost ( {
                    titulo:'',
                    contenido:''
                })
                setTimeout(() => {
                    
                    guardarEdicionOk(false)
                    
                }, 2000);
                                        
                    
                })
            .catch(error =>{
                return    console.log(error)
                })
            } 
            consultAPI()
            
    }

    return (
    
    <>
        <h2>Cambiar post</h2>

        {idPost != 0 
            ?
                <div className="form-group w-50 mt-4 ">
                <form onSubmit = {onSubmit}>
                    <label
                        class="form-label"
                        htmlFor="titulo"
                        >Ingrese el nuevo título</label>
                    <input
                        type="text"
                        className='form-control mb-4'
                        placeholder='Ingrese el nuevo título'
                        id='titulo' 
                        name='titulo'
                        value={titulo}
                        onChange={onChange}
                    />

                    <label
                        class="form-label"
                        htmlFor="contenido"
                        >Ingrese el nuevo contenido</label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder='Ingrese contenido'
                        id='contenido'
                        name='contenido'
                        value={contenido}
                        onChange={onChange}
                    />

                    <button type='submit'  className=' btn btn-primary mt-4 '>Enviar cambios!</button>
                        
                </form>
                    {error ?
                        <Alert variant="filled" severity="error">
                            <AlertTitle>Error!</AlertTitle>
                            Todos los campos son obligatorios — Intente nuevamente!
                        </Alert>
                        : null}
                    {edicionOk ?
                        <Alert variant="filled" severity="success">
                            Cambio de datos Exitoso!
                        </Alert>
                    :null}
                </div>    
            :

            <h3>Primero seleccione el post que desea modificar.</h3>
        }
        
    
    </> );
}
 
export default Edicion;