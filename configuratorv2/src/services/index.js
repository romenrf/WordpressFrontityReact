import React from 'react'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'


const apiWc = new WooCommerceRestApi({
    url: "http://desa3.ilos.es",
    consumerKey: "ck_ba92dde2c3372b364cdfdd1b3f997d93b2bd3098",
    consumerSecret: "cs_ca0aba47c3da220e1aea7aaa09bf5334dc92e953",
    version: "wc/v3"
})



export const ConectarCatalogo = () =>{

    const [catalogo, setCatalogo ] = React.useState([])
    
    React.useEffect(()=>{
        apiWc.get("products")
        .then( (response) =>{
            console.log("Response Status:", response.status);
            if (response.status === 200){
                console.log("Response Data:", response.data);
                setCatalogo(response.data)
            }
            //console.log("Response Headers:", response.headers);
        })
    },[])

    return(
        (catalogo.filter(x=> x.purchasable===true).length === 0)
        ?<h3>...cargando productos</h3>
        :<h3>Hay {(catalogo.filter(x=> x.purchasable===true).length > 1)?catalogo.filter(x=> x.purchasable===true).length + " productos disponibles":"1 producto disponible"}</h3>   
    )
}
