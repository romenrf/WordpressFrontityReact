import React from 'react'
import { Global, css, connect, styled, Head } from "frontity";

import { Button } from "@material-ui/core"



const Configurador = (props) => {

    
 return(   
        <CssContainer>
            <CssContainerItem>
                <CssFirstOption>
                <Button  size="large" color="default" variant="contained" >Añadir imagen</Button>
                <Button size="large" color="default" variant="contained">Añadir Texto</Button>
                </CssFirstOption>
            </CssContainerItem>        
            <CssContainerItem>
                <CssSecondOption>
                    <h2>Texto</h2>
                </CssSecondOption>
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
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0)
      );
`;

const CssFirstOption = styled.div`
    width: 100%;            
`;

const CssSecondOption = styled.div`
    width: 100%;        
`;
