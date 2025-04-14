import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowsFocus: false,
    },
  },
});
createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        {" "}
        <App />
      </QueryClientProvider>
    </StrictMode>
    ,
  </ThemeProvider>
);
