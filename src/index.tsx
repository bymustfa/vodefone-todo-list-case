import React, { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "styles/style.scss";
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Suspense fallback={<div> Loading... </div>}>
    <StrictMode>
      <App />
    </StrictMode>
  </Suspense>
);
