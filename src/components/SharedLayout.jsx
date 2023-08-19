import React, { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/rates'>Rates</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default SharedLayout;
