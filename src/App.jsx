import React from "react";

import { lazy, Suspense } from "react";
const Header = lazy(() => import("remoteApp/Header"));
const Navbar = lazy(() => import("remoteApp/Navbar"));
import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Navbar />
        </Suspense>
        <Button />
      </div>
    </>
  );
}

export default App;
