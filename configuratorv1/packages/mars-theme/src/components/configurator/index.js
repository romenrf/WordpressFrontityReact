import React from 'react'
import { connect, styled } from "frontity";

import { Button, TextField } from "@material-ui/core"

import { BackgroundConfigurator } from './background'

import { Rnd } from 'react-rnd'

import { Spring } from "react-spring";

import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined';
import ZoomOutOutlinedIcon from '@material-ui/icons/ZoomOutOutlined';

//import Portal from './functions'

const Configurador = ({state}) => {
    // Get the data of the current list.
    const data = state.source.get(state.router.link);
    const [ sms, setsms] = React.useState("");
    const [ textocontainer, settextocontainer] = React.useState("VAYA POCA BROMA");
    const [ rotateAngle, setrotateAngle] = React.useState(0)
    const [ sizeItem, setsizeitem] = React.useState(2)
    const [ divnumber , setdivnumber ] = React.useState(0)
    
    
    const handlerImagen = () =>{
        setsms("Imagen")
    }

    const style = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        //background: "#f0f0f0"
      };
    
    const containerGeneral={        
        background:"#222"
    }

    const containerItem={
        background:"#ccc"
    }

    const CssTransform={
        transform: "rotate("+rotateAngle+"deg) scale("+sizeItem+")",
    }

    const handleAddDegree = ()=>{
        setrotateAngle( rotateAngle => rotateAngle = (rotateAngle + 90))
    }

    const handleSubDegree = ()=>{
        setrotateAngle( rotateAngle => rotateAngle = (rotateAngle - 90))
    }

    const handleAddSize = ()=>{        
        setsizeitem( sizeItem => sizeItem = (sizeItem + 0.1) )
    }

    const handleSubSize = ()=>{
        setsizeitem(sizeItem => sizeItem = (sizeItem - 0.1) )
    }

    const handlerTexto = () =>{
        setsms("Texto")
        var reactNode = React.createElement('div')
        element.textContent = 'Hello word';
        ReactDOM.render(reactNode, document.getElementById('root'))
        alert("creado")
    } 
    

    return(   
        <CssContainer>
            <CssContainerItem>
                <CssFirstOption>
                <Button  size="large" color="default" variant="contained" onClick={handlerImagen}>Añadir imagen</Button>
                <br/><br/>
                <Button size="large" color="default" variant="contained" onClick={handlerTexto}>Añadir Texto</Button>
                
                </CssFirstOption>
            </CssContainerItem>        
            <CssContainerItem>
                <CssSecondOption>
                    <TextField 
                        id="textcontainer" 
                        label="Texto" 
                        variant="outlined" 
                        value={textocontainer} 
                        //onChange={}                        
                        helperText="Por favor introduce el texto"
                        />  
                        < br/><br/>
                        <RotateLeftIcon fontSize="large" onClick={handleAddDegree}/>
                        <RotateRightIcon fontSize="large" onClick={handleSubDegree}/>
                        <ZoomInOutlinedIcon fontSize="large" onClick={handleAddSize} />
                        <ZoomOutOutlinedIcon fontSize="large" onClick={handleSubSize} />
                        <DeleteForeverOutlinedIcon fontSize="large" />
                        <Button size="large" color="primary" variant="contained" onClick={handlerTexto}>Añadir Al Carrito</Button>
                </CssSecondOption>
            </CssContainerItem>
            <CssContainerItem>
                    <div id="containerGeneral" style={containerGeneral}>                    

                        <Rnd
                        style={style}
                        default={{
                        x: 0,
                        y: 0,
                        width: 320,
                        height: 200
                        }}
                        >
                            <div style={CssTransform}>{textocontainer}</div>
                        </Rnd>
                        <div id="containerElementos">

                        </div>
                        <BackgroundConfigurator class type="camisa"/>                                        
                    </div>
            </CssContainerItem>
        </CssContainer>
    )
};


                        

export default connect(Configurador)

const CssContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 15% 70%;
  grid-template-rows: 400px 400px 400px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 5, 37, 0.1),
    rgba(255, 5, 37, 0)
  );
`;

const CssContainerItem = styled.div`
    padding: 1rem;
    border-right: 1px dotted #444;
    background-image: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.4),
        rgba(255, 255, 255, 0)
      );
`;

const CssFirstOption = styled.div`
    width: 100%;            
`;

const CssSecondOption = styled.div`
    width: 100%;        
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;


