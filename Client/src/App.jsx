import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import ScollingNav from './components/ScollingNav';
import SecondNav from './components/SecondNav';
import NavThree from './components/NavThree';
import Footer from './components/Footer';
import ProdcutGuide from './components/ProdcutGuide'
import './App.css';
import JuniorPack from './components/JuniorPack';
import IntheBox from './components/IntheBox';
import GameCard from './components/GameCard';
import DeviceCompatibility from './components/DeviceCompatibility';

// ... other imports remain the same

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://playshifu-zuer.onrender.com/products/datas');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();

      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        throw new Error('Invalid data format received from API');
      }

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  const heroProduct = products.find(product => product.id === "PLG001");
  const otherProducts = products.filter(product => product.id !== "PLG001");

  return (
    <Router>
      <CartProvider>
        <div className=" bg-gray-50">
          <ScollingNav/>
          <SecondNav/>
          <NavThree/>
       
          <Routes>
            <Route path="/" element={
              <>
                <ProductDetails product={heroProduct} />
                <ProdcutGuide/>
                <JuniorPack/>
                <IntheBox/>
                <GameCard/>
                <DeviceCompatibility/>
                <ProductList products={otherProducts} />
              </>
            } />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
        <Footer/>
      </CartProvider>
    </Router>
  );
}

export default App;
