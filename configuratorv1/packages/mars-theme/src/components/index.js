import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
//import List from "./list";
//import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";

import Configurador from "./configurator/index"
import Inicio from "./inicio"
/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const [jumping,setJumping] = React.useState(false)

  console.log("State en Theme",state)

  if ((data.route === "/exit/")&&(!jumping)){
    setJumping(true)
    console.log("Salir")
    window.location.replace("http://www.gofioteam.com")
  }

  const renderSwitchModules = (param)=>{    
    switch(param.route){
      case "/": return <Inicio />
      case "/configurator/": return <Configurador state={state} />
    }
  }

  return (
     (!jumping)
      ?<>      
        {/* Add some metatags to the <head> of the HTML. */}
        <Title />
        <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        </Head>
      
        {/* Add some global styles for the whole site, like body or a's. 
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
        <Global styles={globalStyles} />
    
        {/* Add the header of the site. */}
        <HeadContainer>
        <Header />
        </HeadContainer>

         {renderSwitchModules(data)}          
                
      </>    
    :<h3> Estas siendo redirigido al carrito de la compra...</h3>
    )
  };
  
  export default connect(Theme);
  
  const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

`;

const HeadContainer = styled.div`
    background-color: #ddd;
`;


