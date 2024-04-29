import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import them from "./MUI/themes.js";
import "./index.css";
import "./Styles/Fonts.css";

const client = new ApolloClient({
  uri: import.meta.env.VITE_APP_GRAPHCMS_URI,
  // uri : 'https://api-us-west-2.hygraph.com/v2/clv5fjuqz01bf07w5wztqybw9/master',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
        <ThemeProvider theme={them}>
          <App />
        </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);
