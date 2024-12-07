

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from "remote-redux-devtools";
import { productsReducers,productDetailsReducers, newReviewReducer, newProductReducer, productReducer, productReviewsReducer, reviewReducer } from './reducers/productReducers'
import { userReducer, profileReducer,forgotPasswordReducer, allUsersReducer, userDetailsReducer} from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducers";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer";

// Example reducer (replace with your actual reducers)
const rootReducer = combineReducers({
       products:productsReducers,
       productDetails:productDetailsReducers,
       user:userReducer,
       profile:profileReducer,
       forgotPassword: forgotPasswordReducer,
       cart:cartReducer,
       newOrder:newOrderReducer,
       myOrders:myOrdersReducer,
       orderDetails:orderDetailsReducer,
       newReview:newReviewReducer,
       newProduct:newProductReducer,
       product:productReducer,
       allOrders: allOrdersReducer,
       order: orderReducer,
       allUsers:allUsersReducer,
       userDetails:userDetailsReducer,
       productReviews: productReviewsReducer,
       review: reviewReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: initialState,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: composeWithDevTools(),
});

export default store;
