import React from 'react'
import { Global, css, connect, styled, Head } from "frontity";

import { Button } from "@material-ui/core"

import Item from "../list/list-item";
import {BackgroundConfigurator} from './background'

//import WooCommerce from "../services/wcservices"

const Configurador = ({state}) => {
    // Get the data of the current list.
    const data = state.source.get(state.router.link);
    const [ sms, setsms] = React.useState("");

    const handlerImagen = () =>{
        setsms("Imagen")
    }

    const handlerTexto = () =>{
        setsms("Texto")
    }

    /*WooCommerce.getAsync('products').then(function(result) {
        return JSON.parse(result.toJSON().body);
      });*/
        

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
                    <h2>{sms}</h2>
                </CssSecondOption>
            </CssContainerItem>
            <CssContainerItem>
                <BackgroundConfigurator type="camisa"/>
                <Button size="large" color="primary" variant="contained" onClick={handlerTexto}>Añadir Al Carrito</Button>
            {/* Iterate over the items of the list. 
            {data.items.map(({ type, id }) => {
            const item = state.source[type][id];
            // Render one Item component for each one.
            return <Item key={item.id} item={item} />;
            })}
            */}

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
