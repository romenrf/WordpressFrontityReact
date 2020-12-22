import React, {useState, useCallback, useContext} from 'react'

import { createPortal } from "react-dom";
import { useTransition } from "react-spring";

import { Button, TextField } from "@material-ui/core"

import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined'
import ZoomOutOutlinedIcon from '@material-ui/icons/ZoomOutOutlined'

import {Rnd} from 'react-rnd'

import '../../../App.css'

import Logoconfigurador from '../logos'

//CREACION DEL ELEMENTO

const ConfigItemElement = (props) =>{

    const { id, 
            tipo,         
        } = props;

    const [itemData, setItemData ] =React.useState({rotatevalue:0,sizevalue:1})

    const handleAddDegree = (event,id)=>{
      console.log("evento",event)   
      console.log("id",id)   

      let temp_item = itemData
      temp_item.rotatevalue = temp_item.rotatevalue - 90

      let ident  = "textcontainer"+id +"draw"   
      document.getElementById(ident).style.transform = "rotate("+temp_item.rotatevalue+"deg) scale("+temp_item.sizevalue+")"
      
      setItemData( temp_item)
    }
    
    const handleSubDegree = (event,id)=>{
        let temp_item = itemData
        temp_item.rotatevalue = temp_item.rotatevalue + 90

        let ident  = "textcontainer"+id +"draw"        
        document.getElementById(ident).style.transform = "rotate("+temp_item.rotatevalue+"deg) scale("+temp_item.sizevalue+")"
              
        setItemData( temp_item)
    }
    
    const handleAddSize = (event,id)=>{        
        let temp_item = itemData
        temp_item.sizevalue = temp_item.sizevalue + 0.1
      
        let ident  = "textcontainer"+id +"draw"      
        document.getElementById(ident).style.transform = "rotate("+temp_item.rotatevalue+"deg) scale("+temp_item.sizevalue+")"
        
        setItemData( temp_item)
    }
    
    const handleSubSize = (event,id)=>{
        let temp_item = itemData
        temp_item.sizevalue = temp_item.sizevalue - 0.1
      
        let ident  = "textcontainer"+id +"draw"       
        document.getElementById(ident).style.transform = "rotate("+temp_item.rotatevalue+"deg) scale("+temp_item.sizevalue+")"
        
        setItemData( temp_item)
    }

    const { removeItem } = useConfiguratorItems();

    const handleChageText = (event) =>{  

        let ident  = event.target.id +"draw"        
        document.getElementById(ident).innerHTML = event.target.value

        let temItem = itemData
        temItem.texto = event.target.value
        setItemData(temItem)      
    }

    return(
        <div className="containerItemOptions">            
            { (tipo === "texto") 
                ?<TextField 
                    id={"textcontainer"+id}
                    label={"Texto "+ id}
                    variant="outlined" 
                    defaultValue={itemData.texto} 
                    onChange={(event)=>handleChageText(event,id)} 
                    helperText="Por favor introduce el texto"
                />  
                :<Button variant="outlined">Seleccionar fichero desde PC</Button>
            }
            <br/>
            <Button size="small" onClick={(event)=>handleAddDegree(event,id)}><RotateLeftIcon color="primary" /></Button>
            <Button size="small" onClick={(event)=>handleSubDegree(event,id)}><RotateRightIcon color="primary" /></Button>
            <Button size="small" onClick={(event)=>handleAddSize(event,id)}><ZoomInOutlinedIcon color="primary" /></Button>
            <Button size="small" onClick={(event)=>handleSubSize(event,id)}><ZoomOutOutlinedIcon color="primary" /></Button>
            <Button size="small" onClick={()=>removeItem(id)}><DeleteForeverOutlinedIcon color="secondary" /></Button>
        </div>
    )
}



//CREACION DEL CONTENEDOR DE ELEMENTOS

const ConfigurationItemContainer = (props) =>{  

    const {itemData } = props

    const transitions = useTransition( itemData , itemData => itemData.id, {
      from: { right: "-100%"},
      enter: { right: "0%"},
      leave: {right: "-100%"}
    })
    //console.log(document.getElementById("configlistitem"))

    return( 
        (document.getElementById("configlistitem")) ?
        createPortal(
        <div >
        {
          transitions.map(({ item,key}) => (            
            <ConfigItemElement key={key} id={item.id} tipo={item.content.tipo} />
          ))
        }
        </div>, document.getElementById("configlistitem"))
        :<></>                
    );
        
}

const ConfigurationItemDraw = (props) =>{  

    const { itemData } = props

    const styleRND = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "solid 1px #ddd",
        //background: "#f0f0f0"
    };
    const [rotatevalue ,setRotate] = React.useState(0);
    const sizevalue = 1;
    
    const CssTransform={
        transform: "rotate("+rotatevalue+"deg) scale("+sizevalue+")",
    }

    const transitions = useTransition( itemData , itemData => itemData.id, {
      from: { right: "-100%"},
      enter: { right: "0%"},
      leave: {right: "-100%"}
    })

    return( 
        (document.getElementById("containerGeneral")) ?
        createPortal(
        <>
        {
          transitions.map(({ item,key}) => (  
                <Rnd key={key} style={styleRND} default={{x: 100, y: 100,width: 220,height: 100}}>
                  {
                    (item.content.tipo=== "texto")
                    ?<div key={key} id={"textcontainer"+item.id+"draw"} style={CssTransform}>{item.content.texto}
                    </div>
                    :<></>
                  }{
                    (item.content.tipo=== "imagen")
                    ?<div key={key} id={"textcontainer"+item.id+"draw"} style={CssTransform}><Logoconfigurador /></div>
                    :<></>
                  }
                </Rnd>          
          ))
        }
        </>, document.getElementById("containerGeneral"))
        :<></>                
    );
        
}


//CREACION DEL PROVIDER
const ConfiguratorItemsContext = React.createContext(null);

let id=1;

const ConfiguratorItemsProvider = (props) => {

  const { children} = props

  const [items, setItems] = useState([]);

  const addnewItem = useCallback( content =>{
    setItems( items =>[
        ...items,
        { id : id++, content}
    ])
  },[setItems])


  const removeItem = useCallback( 
    id =>{
        setItems( items => items.filter( item => item.id !== id));
    },[setItems]
  );


  return(

     
    <ConfiguratorItemsContext.Provider
      value={{
        addnewItem,
        removeItem
      }}
      >
        <ConfigurationItemContainer itemData={items} />
        <ConfigurationItemDraw itemData={items} />
        {children}
      </ConfiguratorItemsContext.Provider>    
    )
}

const useConfiguratorItems = () => {
    const configurationitemHelpers = useContext(ConfiguratorItemsContext);
    return configurationitemHelpers;
  }


export { ConfiguratorItemsProvider , ConfiguratorItemsContext ,useConfiguratorItems};
