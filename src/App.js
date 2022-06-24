
import "./styles/index.css";
import Header from './components/Header';
import { ContextProvider } from "./context/Contextapi";
import CheckoutCard from "./components/CheckoutCard";
import Product from "./components/product/Product";

function App() {
  return (
    <ContextProvider>
    <div className="App">
    <Header/>
    <CheckoutCard/>
     <Product/>
    </div>
    </ContextProvider>
   
  );
}

export default App;
