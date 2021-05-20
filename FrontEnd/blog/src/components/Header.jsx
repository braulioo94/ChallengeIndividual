import React,{useContext} from 'react'
import { Link} from "react-router-dom";
import blogContext from '../useContext/blogContext';

const Header = () => {
    const operacionsContext = useContext(blogContext) ;
    const {guardarEliminar,guardarEdicion,guardarDetalles} = operacionsContext ;

    return ( 
        
        <>
            <div onClick={guardarEdicion(false),guardarEliminar(false)}><Link className="btn btn-dark" to="/">Home</Link></div>
            <div ><Link onClick={guardarDetalles(false)} className="btn btn-dark" to="/edicion">Edición</Link></div>
            <div><Link className="btn btn-dark" to="/creacion">Creación</Link></div>
            

        </>
    );
}

export default Header;