
// import './App.css';
// import { useEffect, useState } from "react";
// import WebFont from "webfontloader";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
// import Header from './Component/layout/Header/Header';
// import Footer from './Component/layout/Footer/Footer';
// import Home from './Component/Home/Home';
// import ProductDetails from './Component/Product/ProductDetails';
// import Products from './Component/Product/Products';
// import Search from './Component/Product/Search';
// import LoginSignUp from './Component/User/LoginSignUp';
// import store from './store';
// import { loadUser } from './actions/userAction';
// import UserOptions from './Component/layout/Header/UserOptions';
// import { useSelector } from "react-redux";
// import Profile from './Component/User/Profile';
// import ProtectedRoute from './Component/Route/ProtectedRoute';
// import UpdateProfile from './Component/User/UpdateProfile';
// import UpdatePassword from './Component/User/UpdatePassword';
// import ForgotPassword from './Component/User/ForgotPassword';
// import ResetPassword from './Component/User/ResetPassword';
// import Cart from './Component/Cart/Cart';
// import Shipping from './Component/Cart/Shipping';
// import ConfirmOrder from './Component/Cart/ConfirmOrder';
// import axios from 'axios';
// import Payment from './Component/Cart/Payment';
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import OrderSuccess from './Component/Cart/OrderSuccess';
// import MyOrders from './Component/Order/MyOrders';
// import OrderDetails from './Component/Order/OrderDetails';
// import Dashboard from './Component/Admin/Dashboard';
// import ProductList from './Component/Admin/ProductList';
// import NewProduct from './Component/Admin/NewProduct';
// import UpdateProduct from './Component/Admin/UpdateProduct';
// import OrderList from './Component/Admin/OrderList';
// import ProcessOrder from './Component/Admin/ProcessOrder';
// import UsersList from './Component/Admin/UsersList';
// import UpdateUser from './Component/Admin/UpdateUser';
// import ProductReviews from './Component/Admin/ProductReviews';
// import About from './Component/layout/About/About';
// import Contact from './Component/layout/Contact/Contact';
// import NotFound from './Component/layout/Not Found/NotFound';
// function App() {

//   const { isAuthenticated, user } = useSelector((state) => state.user);

//   const [stripeApiKey, setStripeApiKey] = useState("");
// async function getStripeApiKey() {
//   try {
//       const { data } = await axios.get("/api/v1/stripeapikey");
//       setStripeApiKey(data.stripeApiKey);
//   } catch (error) {
//       console.error("Error fetching Stripe API key:", error);
//       // Optionally show an alert or UI feedback
//   }
// }

//   useEffect(() => {
//     WebFont.load({
//       google: {
//         families: ["Roboto", "Droid Sans", "Chilanka"],
//       },
//     });
//     store.dispatch(loadUser());

//     getStripeApiKey();
//   }, []);

//   return (
//     <Router>
//       <Header />
//       {isAuthenticated && <UserOptions user={user} />}
//       {stripeApiKey && (
//           <Route path="/process/payment" 
//                  element={
//                    <Elements stripe={loadStripe(stripeApiKey)}>
//                      <ProtectedRoute component={Payment} />
//                    </Elements>
//                  } 
//           />
//         )}
      
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/product/:id" element={<ProductDetails />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:keyword" element={<Products />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />

//         <Route path="/account" element={<ProtectedRoute component={Profile} />} />
//         <Route path="/login" element={<LoginSignUp />} />
//         <Route path="/me/update" element={<ProtectedRoute component={UpdateProfile} />} />
//         <Route path="/password/update" element={<ProtectedRoute component={UpdatePassword} />} />
//         <Route path="/shipping" element={<ProtectedRoute component={Shipping} />} />
//         <Route path="/password/forgot" element={<ForgotPassword />} />
//         <Route path="/password/reset/:token" element={<ResetPassword />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/order/confirm" element={<ProtectedRoute component={ConfirmOrder} />} />
// <Route path="/success" element={<ProtectedRoute component={OrderSuccess} />} />
// <Route path="/orders" element={<ProtectedRoute component={MyOrders} />} />
// <Route path="/order/:id" element={<ProtectedRoute component={OrderDetails} />} />
// <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin={true}  component={Dashboard} />} />
// <Route path="/admin/products" element={<ProtectedRoute isAdmin={true}  component={ProductList} />} />  
// <Route path="/admin/product" element={<ProtectedRoute isAdmin={true}  component={NewProduct} />} />  
// <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin={true}  component={UpdateProduct} />} />  
// <Route path="/admin/orders" element={<ProtectedRoute isAdmin={true}  component={OrderList} />} />  
// <Route path="/admin/order/:id" element={<ProtectedRoute isAdmin={true}  component={ProcessOrder} />} />  
// <Route path="/admin/users" element={<ProtectedRoute isAdmin={true}  component={UsersList} />} />  
// <Route path="/admin/user/:id" element={<ProtectedRoute isAdmin={true}  component={UpdateUser} />} />  
// <Route path="/admin/reviews" element={<ProtectedRoute isAdmin={true}  component={ProductReviews } />} />  
// <Route 
//           path="*" 
//           element={
//             window.location.pathname === "/process/payment" 
//               ? null 
//               : <NotFound />
//           } 
//         />
//       </Routes>
      
//       <Footer />
//     </Router>
//   );
// }

// export default App;



import './App.css';
import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Header from './Component/layout/Header/Header';
import Footer from './Component/layout/Footer/Footer';
import Home from './Component/Home/Home';
import ProductDetails from './Component/Product/ProductDetails';
import Products from './Component/Product/Products';
import Search from './Component/Product/Search';
import LoginSignUp from './Component/User/LoginSignUp';
import store from './store';
import { loadUser } from './actions/userAction';
import UserOptions from './Component/layout/Header/UserOptions';
import { useSelector } from "react-redux";
import Profile from './Component/User/Profile';
import ProtectedRoute from './Component/Route/ProtectedRoute';
import UpdateProfile from './Component/User/UpdateProfile';
import UpdatePassword from './Component/User/UpdatePassword';
import ForgotPassword from './Component/User/ForgotPassword';
import ResetPassword from './Component/User/ResetPassword';
import Cart from './Component/Cart/Cart';
import Shipping from './Component/Cart/Shipping';
import ConfirmOrder from './Component/Cart/ConfirmOrder';
import axios from 'axios';
import Payment from './Component/Cart/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OrderSuccess from './Component/Cart/OrderSuccess';
import MyOrders from './Component/Order/MyOrders';
import OrderDetails from './Component/Order/OrderDetails';
import Dashboard from './Component/Admin/Dashboard';
import ProductList from './Component/Admin/ProductList';
import NewProduct from './Component/Admin/NewProduct';
import UpdateProduct from './Component/Admin/UpdateProduct';
import OrderList from './Component/Admin/OrderList';
import ProcessOrder from './Component/Admin/ProcessOrder';
import UsersList from './Component/Admin/UsersList';
import UpdateUser from './Component/Admin/UpdateUser';
import ProductReviews from './Component/Admin/ProductReviews';
import About from './Component/layout/About/About';
import Contact from './Component/layout/Contact/Contact';
import NotFound from './Component/layout/Not Found/NotFound';  // Fixed the path to NotFound

function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    try {
        const { data } = await axios.get("/api/v1/stripeapikey");
        setStripeApiKey(data.stripeApiKey);
    } catch (error) {
        console.error("Error fetching Stripe API key:", error);
    }
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  window.addEventListener("contextmenu", (e) => e.preventDefault());


  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}
      
      <Routes>
        {/* All Routes inside <Routes> */}
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:keyword" element={<Products />} />
        <Route path="/search" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/account" element={<ProtectedRoute component={Profile} />} />
        <Route path="/login" element={<LoginSignUp />} />
        <Route path="/me/update" element={<ProtectedRoute component={UpdateProfile} />} />
        <Route path="/password/update" element={<ProtectedRoute component={UpdatePassword} />} />
        <Route path="/shipping" element={<ProtectedRoute component={Shipping} />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order/confirm" element={<ProtectedRoute component={ConfirmOrder} />} />
        <Route path="/success" element={<ProtectedRoute component={OrderSuccess} />} />
        <Route path="/orders" element={<ProtectedRoute component={MyOrders} />} />
        <Route path="/order/:id" element={<ProtectedRoute component={OrderDetails} />} />
        <Route path="/admin/dashboard" element={<ProtectedRoute isAdmin={true} component={Dashboard} />} />
        <Route path="/admin/products" element={<ProtectedRoute isAdmin={true} component={ProductList} />} />  
        <Route path="/admin/product" element={<ProtectedRoute isAdmin={true} component={NewProduct} />} />  
        <Route path="/admin/product/:id" element={<ProtectedRoute isAdmin={true} component={UpdateProduct} />} />  
        <Route path="/admin/orders" element={<ProtectedRoute isAdmin={true} component={OrderList} />} />  
        <Route path="/admin/order/:id" element={<ProtectedRoute isAdmin={true} component={ProcessOrder} />} />  
        <Route path="/admin/users" element={<ProtectedRoute isAdmin={true} component={UsersList} />} />  
        <Route path="/admin/user/:id" element={<ProtectedRoute isAdmin={true} component={UpdateUser} />} />  
        <Route path="/admin/reviews" element={<ProtectedRoute isAdmin={true} component={ProductReviews} />} />  
        
        {/* Stripe Payment Route inside Routes */}
        {stripeApiKey && (
          <Route path="/process/payment" 
                 element={
                   <Elements stripe={loadStripe(stripeApiKey)}>
                     <ProtectedRoute component={Payment} />
                   </Elements>
                 } 
          />
        )}

        {/* NotFound Route for handling undefined routes, except /process/payment */}
        <Route 
          path="*" 
          element={
            window.location.pathname === "/process/payment" 
              ? null 
              : <NotFound />
          } 
        />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
