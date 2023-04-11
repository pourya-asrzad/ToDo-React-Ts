import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { INTERNAL_PATH } from "../configs/routes.config";
import NotFoundPage from "../pages/NotFound.page";
import { PublicRoutes } from "./public.routes";
const LazyHome = React.lazy(() => import("../pages/Home.page"));
const LazySearch = React.lazy(() => import("../pages/Search.page"));
export const AppRouting = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path={INTERNAL_PATH.HOME} element={<LazyHome />} />
          <Route path={INTERNAL_PATH.SEARCH} element={<LazySearch />} />
          <Route path={INTERNAL_PATH.NOT_FOUND} element={<NotFoundPage />} />
          <Route path={INTERNAL_PATH.Edit} element={<LazyHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
