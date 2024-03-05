import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import AuthProvider from "./context/provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
    </Provider>
    <Toaster position="bottom-right" reverseOrder={false} />
  </React.StrictMode>
);
