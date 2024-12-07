import React, { Fragment,useEffect } from "react";
import { CgMouse } from "react-icons/cg"; 
import "./Home.css";
import ProductCard from "./ProductCard";
import { useDispatch,useSelector } from "react-redux";
import { getProduct ,clearError} from "../../actions/productAction";
import MetaData from "../layout/Metadata";
import Loader from "../layout/Loader/Loader";
import { useSnackbar } from "notistack";

const Home = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar(); 
  const { products, loading, error} = useSelector((state) => state.products);



useEffect(() => {
  if (error) {
    enqueueSnackbar(error, { variant: "error" }); 
    dispatch(clearError())
   }
  dispatch(getProduct());
}, [dispatch, error, enqueueSnackbar]); 




return (
  <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title="ECOMMERCE" />

        <div className="banner">
          <p>Welcome to Ecommerce</p>
          <h1>FIND AMAZING PRODUCTS BELOW</h1>

          <a href="#container">
            <button>
              Scroll <CgMouse />
            </button>
          </a>
        </div>

        <h2 className="homeHeading">Featured Products</h2>

        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </Fragment>
    )}
  </Fragment>
);
};
export default Home;




