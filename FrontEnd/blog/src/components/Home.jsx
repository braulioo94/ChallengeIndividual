import React,{useEffect, useState,useContext} from 'react';
import blogContext from '../useContext/blogContext';
import { Redirect,Link} from "react-router-dom";
const Home = () => {

    //useContext
    const operacionsContext = useContext(blogContext) ;
    const {getPost,posts,guardarIdPost,guardarEliminar,guardarEdicion,guardarDetalles,eliminar,edicion,detalles} = operacionsContext ;
    useEffect(() => {
        getPost()
        guardarIdPost(0)
    }, [])


    const verDetalles = id =>{
        guardarIdPost(id);
        guardarDetalles(true)
    }

    const verEdicion = id =>{
        guardarIdPost(id);
        guardarEdicion(true)
    }

    const verEliminar = id =>{
        guardarIdPost(id);
        guardarEliminar(true)
    }
    
    return ( 
        <>
            <h2>Home</h2>
            <h3>Listado de Posts</h3>
            <table 
                className='table'    
            >
                <thead>
                <tr>
                    <th scope="col">Titulo</th>
                    <th scope="col">Detalles</th>
                    <th scope="col">Editar</th>
                    <th scope="col">Eliminar</th>
                </tr>
                </thead>
                <tbody>
                    {posts.map(post =>(
                        <tr>
                            <th className='col-6'>{post.title}</th>
                            <th><button
                                    className='btn btn-info col-12' 
                                    onClick={e=>verDetalles(post.id)}
                                    >Detalles
                                </button></th>
                            <th><button
                                className='btn btn-success col-12' 
                                onClick={e=>verEdicion(post.id)}
                                >Editar</button></th>
                            <th><button className='btn btn-danger col-12' onClick={e=>verEliminar(post.id)}>Eliminar</button></th>
                        </tr>
                    ))}
                </tbody>


            </table>
            {detalles ? <Redirect to="/detalle" /> : null}
            {edicion ? <Redirect to="/edicion" /> : null}
            {eliminar ? <Redirect to="/eliminar" /> : null}
        </>
    );
}
 
export default Home;