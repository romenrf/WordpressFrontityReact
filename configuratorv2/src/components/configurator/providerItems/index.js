import React, {useState, useCallback, useContext} from 'react'

import { createPortal } from "react-dom";
import { useTransition } from "react-spring";

import { Button, TextField } from "@material-ui/core"

import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import RotateRightIcon from '@material-ui/icons/RotateRight'
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined'
import ZoomInOutlinedIcon from '@material-ui/icons/ZoomInOutlined'
import ZoomOutOutlinedIcon from '@material-ui/icons/ZoomOutOutlined'

import '../../../App.css'

//CREACION DEL ELEMENTO

const ConfigItemElement = (props) =>{

    const { id, 
            tipo,         
        } = props;

    const [itemData, setItemData ] =React.useState({id:id,rotatevalue:0,sizevalue:0})

    const [ texto, settexto ] = React.useState("")

    const handleAddDegree = (id)=>{
        console.log(itemData)
        let temp_item = itemData
        temp_item.rotatevalue = temp_item.rotatevalue + 90
        setItemData( temp_item)
    }
    
    const handleSubDegree = (id)=>{
        console.log(itemData)
        let temp_item = itemData
        temp_item.rotatevalue = temp_item.rotatevalue - 90
        setItemData( temp_item)
    }
    
    const handleAddSize = (id)=>{        
        console.log(itemData)
        let temp_item = itemData
        temp_item.sizevalue = temp_item.sizevalue + 0.1
        setItemData( temp_item)
    }
    
    const handleSubSize = (id)=>{
        console.log(itemData)
        let temp_item = itemData
        temp_item.sizevalue = temp_item.sizevalue - 0.1
        setItemData( temp_item)
    }

    const { removeItem } = useConfiguratorItems();

    return(
        <div className="containerItemOptions">            
            { (tipo === "texto") 
                ?<TextField 
                    id={"textcontainer"+id}
                    label={"Texto "+ id}
                    variant="outlined" 
                    defaultValue={texto} 
                    onChange={(event)=>settexto(event.target.value)} 
                    helperText="Por favor introduce el texto"
                />  
                :<Button variant="outlined">Seleccionar fichero desde PC</Button>
            }
            <RotateLeftIcon color="primary" fontSize="medium" onClick={()=>handleAddDegree(id)}/>
            <RotateRightIcon color="primary" fontSize="medium" onClick={()=>handleSubDegree(id)}/>
            <ZoomInOutlinedIcon color="primary" fontSize="medium" onClick={()=>handleAddSize(id)} />
            <ZoomOutOutlinedIcon color="primary" fontSize="medium" onClick={()=>handleSubSize(id)} />
            <DeleteForeverOutlinedIcon color="primary" fontSize="medium" onClick={()=>removeItem(id)}/>  
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
    console.log(document.getElementById("configlistitem"))

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
        {children}
      </ConfiguratorItemsContext.Provider>    
    )
}

const useConfiguratorItems = () => {
    const configurationitemHelpers = useContext(ConfiguratorItemsContext);
    return configurationitemHelpers;
  }


export { ConfiguratorItemsProvider , ConfiguratorItemsContext ,useConfiguratorItems};
