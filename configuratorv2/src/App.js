import React from 'react'
import './App.css';
import Configurador from './components/configurator'
import {ConectarCatalogo} from './services'

import {ConfiguratorItemsProvider} from './components/configurator/providerItems'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ConectarCatalogo />
      </header>
      <main className="App-header">
        <ConfiguratorItemsProvider >                                                       
          <Configurador />
        </ConfiguratorItemsProvider>
      </main>

      <footer className="footer">
        <div>2020 Rótulos Caracter @ Todos los derechos reservados. V0.0.2 Configurador </div>
      </footer>
      
    </div>
  );
}

export default App;
