import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App.jsx";
import { StrictMode } from "react";
import { ContentProvider, } from "./context/Content";


ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
    <ContentProvider>
    <StrictMode>
        <App />
        </StrictMode>
    </ContentProvider>
  </BrowserRouter>
  
);