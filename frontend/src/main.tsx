import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// Registrar Service Worker para PWA
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("✅ Service Worker registrado:", registration);
    })
    .catch((error) => {
      console.warn("⚠️ Erro ao registrar Service Worker:", error);
    });
}
