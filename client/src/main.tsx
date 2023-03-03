import { ApolloProvider } from "@apollo/client/react";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { client } from "./configs/graphql";
import { AppProvider } from "./contexts/app.context";
import { AuthProvider } from "./contexts/auth.context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NextUIProvider>
      <ApolloProvider client={client}>
        <AuthProvider>
          <AppProvider>
            <App />
          </AppProvider>
        </AuthProvider>
      </ApolloProvider>
    </NextUIProvider>
  </React.StrictMode>
);
