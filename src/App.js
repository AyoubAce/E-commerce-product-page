
import "./styles/index.css";
import Header from './components/Header';
import { ContextProvider } from "./context/Contextapi";
import CheckoutCard from "./components/CheckoutCard";
import Product from "./components/product/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <ContextProvider>
    <div className="App">
    <Header/>
    <CheckoutCard/>
     <Product/>
     <Footer />
    </div>
    </ContextProvider>
   
  );
}

export default App;
