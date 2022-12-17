import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "pages/Home";
import NotFoundPage from "pages/NotFoundPage";
import ServiceUnavailable from "pages/ServiceUnavailable";

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="503" element={<ServiceUnavailable />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default Router;
