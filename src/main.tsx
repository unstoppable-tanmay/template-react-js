import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootProvider from "./providers/root-provider";
import AppRouter from "./router";
import { persistor, store } from "./store";
import "./styles/index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RootProvider>
            <AppRouter />
          </RootProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
