import NavbarComponent from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cancel from '../src/Pages/Cancel';
import Store from '../src/Pages/Store';
import Success from '../src/Pages/Success';
import CartProvider from './CartContext';


// localhost: 3000 -> Home 
// localhost: 3000/success -> <h1>Thank you!</h1>
// localhost: 3000/Cancel -> <h1>Sorry to see you!</h1>
function App() {
  return (
    <CartProvider>
      <Container>
        <NavbarComponent></NavbarComponent>
        <BrowserRouter>
          <Routes> //! Navigation routes
            <Route index element={<Store />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
