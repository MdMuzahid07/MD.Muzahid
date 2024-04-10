import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import AuthProvider from "./context/provider/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";
import AnimatedCursor from "react-animated-cursor";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={routes} />
        </AuthProvider>
      </HelmetProvider>
    </Provider>

    {/* react hot toast  */}
    <Toaster position="bottom-right" reverseOrder={false} />

    {/* react animated cursor */}
    <AnimatedCursor
      innerSize={10}
      outerSize={40}
      color="164, 15, 255"
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  </React.StrictMode>
);
