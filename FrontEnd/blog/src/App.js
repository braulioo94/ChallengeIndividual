import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React from 'react';
import Header from './components/Header'
import Home from './components/Home'
import Edicion from './components/Edicion'
import Creacion from './components/Creacion';
import BlogState from './useContext/blogState';
import Detalle from './components/Detalle';
import Eliminar from './components/Eliminar'


function App() {
  return (
    <BlogState>
      <Router>
        <div className="container-sm ">

            <div className='d-flex justify-content-around '>
              <Header />
            </div>
            <div className='mt-5 d-flex flex-column justify-content-center align-items-center '>
              <Switch>
                <Route exact path="/edicion" component={Edicion}/> 
                <Route exact path="/" component={Home}/>
                <Route exact path="/creacion" component={Creacion}/>
                <Route exact path="/detalle" component={Detalle}/>
                <Route exact path="/eliminar" component={Eliminar}/>
            </Switch>
          </div>
      
        </div>
      </Router>
    </BlogState>
  );
}

export default App;
