import React from 'react'
import apiWc from '../../services/wcservices'

import {Button, Grid} from '@material-ui/core'


export const Inicio = () =>{
    
    const [catalog, setCatalog] = React.useState([])        
    const [totalproducts, settotalproducts] = React.useState(0)
    
    const handleConfig = (item) =>{
        alert("Configurar producto "+item.name)
        console.log("Configurar item ",item)        
    }

    React.useEffect(()=>{
        apiWc.get("products")
        .then( (response) =>{
            console.log("Response Status:", response.status);
            if (response.status === 200){
                console.log("Response Data:", response.data);
                setCatalog(response.data)
            }
            //console.log("Response Headers:", response.headers);
        })
    },[])
    

    return (

        ( catalog.length === 0 )
        ?<h2>...cargando productos</h2>
        :<>        
            <h2>Hay {catalog.length} para seleccionar.</h2>
            <h3>Por favor elija uno</h3>
            <Grid container >
            {catalog.map( (item,index) =>{
                return (
                    <Grid item key={index}>
                        { (item.images.length > 0 )
                            ?<img src={item.images[0].src} />
                            :<p>Imagen no disponible</p>
                        }
                        
                        <h3>{item.name}</h3>
                        <Button onClick={()=>handleConfig(item)} variant="contained" >Configurar</Button>
                    </Grid>
                )
            })}
            </Grid>
        </>
    )
}

export default Inicio