import React  from 'react'

import { Button, TextField } from "@material-ui/core"

import { BackgroundConfigurator } from './background'

import {Rnd} from 'react-rnd'


//import { Spring } from "react-spring";

import '../../App.css'
import Logoconfigurador from './logos'

import {useConfiguratorItems} from './providerItems'


export function Configurador(props){
    
    const { data , tasksRef} = props
    const { addnewItem } = useConfiguratorItems();

    //const [ textocontainer, settextocontainer] = React.useState("VAYA POCA BROMA");
    const [ itemdata, setitemdata] = React.useState([{id:0,rotatevalue:0,sizevalue:0}])
    
    const styleRND = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        //background: "#f0f0f0"
    };
    
    const CssTransform={
        transform: "rotate("+itemdata[0].rotatevalue+"deg) scale("+itemdata[0].sizevalue+")",
    }
        
    
    const handlerImagen = () =>{
        addnewItem({texto:"Prueba",tipo:"imagen"})
    }
    const handlerTexto = () =>{

        /*var nuevoElemento = <Rnd style={styleRND} default={{x: 0, y: 0,width: 320,height: 200}}>
                                <div style={CssTransform}>{textocontainer}</div>
                            </Rnd>

        var reactNode = React.createElement('div',{},nuevoElemento);        

        ReactDOM.render(reactNode, document.getElementById('containerItems'))*/        

        addnewItem({texto:"Prueba",tipo:"texto"})
    } 

    return(                
        <div className="CssContainer">
            <div className="CssContainerItem">
                <div className="CssFirstOption">
                    <Logoconfigurador />
                    <Button className="botonMenu" fullWidth color="default" variant="outlined" onClick={handlerImagen}>Añadir imagen</Button>
                    <Button className="botonMenu" fullWidth size="large" color="default" variant="outlined" onClick={handlerTexto}>Añadir Texto</Button>  
                    <Button size="large" color="primary" fullWidth variant="contained" onClick={handlerTexto}>Finalizar edición</Button>              
                </div>
            </div>        

            <div className="CssContainerItem">
                <div className="CssSecondOption">
                    <form className="form" noValidate autoComplete="off">                                             
                        <div id="configlistitem" />
       
                    </form>
                </div>
            </div>
            
            <div className="CssContainerItem">
                    <div id="containerGeneral" className="containerGeneral">                                                                    
                        <BackgroundConfigurator type="camisa"/>                                        
                    </div>
            </div>
        </div>
    )
};

export default Configurador;

