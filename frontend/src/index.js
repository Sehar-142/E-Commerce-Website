
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./store";
// import { SnackbarProvider } from "notistack";

// ReactDOM.render(
//   <Provider store={store}>
//     <SnackbarProvider
//       maxSnack={3} 
//       anchorOrigin={{
//         vertical: 'bottom',
//         horizontal: 'center',
//       }}
//       // autoHideDuration={5000} 
//     >
//       <App />
//     </SnackbarProvider>
//   </Provider>,
//   document.getElementById("root")
// );


import React from "react";
import ReactDOM from "react-dom/client";  // Import from "react-dom/client" for React 18
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";
import { SnackbarProvider } from "notistack";

// Create the root using createRoot API
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      // autoHideDuration={5000} 
    >
      <App />
    </SnackbarProvider>
  </Provider>
);
