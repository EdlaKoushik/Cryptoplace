import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import CoinContextProvider from "./context/CoinContext.jsx"
createRoot(document.getElementById('root')).render(

   <BrowserRouter>
   <CoinContextProvider>
   <App />
   </CoinContextProvider>
   </BrowserRouter>

)

