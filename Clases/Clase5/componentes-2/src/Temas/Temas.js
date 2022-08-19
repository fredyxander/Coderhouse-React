import './Temas.css';

import {MultipleChildrenProp} from './Children/MultipleChildrenProp/MultipleChildrenProp';
import { SinlgeChildrenProp } from './Children/SingleChildrenProp/SingleChildrenProp';
import {EstadoClase} from './EstadoClase/EstadoClase';
import {CiclosDeVidaClases} from './CiclosDeVidaClases/CiclosDeVidaClases';
import { Imagen } from '../components/Imagen/Imagen';
import Pikachu from '../assets/pikachu.png';
import charizard from '../assets/Charizard.webp';
import {EstadoFunciones} from './EstadoFunciones/EstadoFunciones'
import { CiclosEnFunciones } from './CiclosEnFunciones/CiclosEnFunciones';

export const Temas = ()=>{
    const urlImagen="www.imagen.com"
    return(
        <div>
            <h2>temas</h2>
            {/* <hr/>
            <p className='titulo'>Propiedad children</p>
            <div className='seccion-tema'>
                <MultipleChildrenProp>
                    <p>elemento 1</p>
                    <p>elemento 2</p>
                </MultipleChildrenProp>
                <SinlgeChildrenProp>
                    <p>elemento 1</p>
                </SinlgeChildrenProp>
            </div> */}

            {/* <hr/>
            <p className='titulo'>Propiedades</p>
            <div className='seccion-tema'>
                <Imagen imagen={Pikachu} poder={100} texto="soy un pickachu" arreglo={['a','b','c']}/>
                <Imagen imagen={charizard} poder={200} texto="soy un dragon"/>
            </div> */}

            {/* <hr/>
            <p className='titulo'>Estado clase</p>
            <div className='seccion-tema'>
                <EstadoClase name="pedro"></EstadoClase>
            </div> */}

            {/* <hr/>
            <p className='titulo'>ciclos de vida clase</p>
            <div className='seccion-tema'>
                <CiclosDeVidaClases></CiclosDeVidaClases>
            </div> */}

            {/* <hr/>
            <p className='titulo'>State hook</p>
            <div className='seccion-tema'>
                <EstadoFunciones/>
            </div> */}

            <hr/>
            <p className='titulo'>useEffect hook -estado funciones</p>
            <div className='seccion-tema'>
                <CiclosEnFunciones/>
            </div>

        </div>
    )
}