import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export const Inicio = () =>{
    const classes = useStyles();
    const [catalog, setCatalog] = React.useState([])        
    const [totalproducts, settotalproducts] = React.useState(0)
    
    const handleConfig = (item) =>{
        alert("Configurar producto "+item.name)
        console.log("Configurar item ",item)        
    }

    const apiWc = new WooCommerceRestApi({
        url: "http://www.gofioteam.com",
        consumerKey: "ck_574cfebc41f29847e774d99976813406bf70112f",
        consumerSecret: "cs_aea33756b263cb58b7ee94d5dae2004cbfc9802b",
        version: "wc/v3"
    })   

    
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

        ( catalog.filter(x=> x.purchasable===true).length === 0 )
        ?<h2>...cargando productos</h2>
        :<>        
            <h2>Hay {catalog.filter(x=> x.purchasable===true).length} para seleccionar.</h2>
            <h3>Por favor elija uno</h3>
            <Grid container direction="row"  justify="center"  alignItems="flex-start"  spacing={3} >
            {catalog.filter(x=> x.purchasable===true).map( (item,index) =>{
                return (
                    <Grid item key={"g"+index} xs={3}>
                        <Card key={"c"+index} className={classes.root}>
                          <CardActionArea>
                            <CardMedia
                                  className={classes.media}
                                  image={item.images[0].src}
                                  title="Contemplative Reptile"
                            />                            
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                {item.name}
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                {item.price} €
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                            <Button size="small" color="primary" variant="contained" onClick={()=>handleConfig(item)}>
                              Configurar
                            </Button>
                          </CardActions>
                        </Card>                 
                    </Grid>
                )
            })}
            </Grid>
        </>
    )
}

export default Inicio