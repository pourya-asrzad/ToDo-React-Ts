import React from "react";
import { Suspense } from "react";
import { AppRouting } from "./routes/index.routes";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  localStorage.setItem("modal", "off");
  return (
    <Suspense fallback={<CircularProgress className="Progress" />}>
      <AppRouting />
    </Suspense>
  );
}

export default App;
