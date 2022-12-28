import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';
import Introduce from 'pages/Introduce';
import NotFoundPage from 'pages/ErrorPages/NotFoundPage';
import ServiceUnavailable from 'pages/ErrorPages/ServiceUnavailable';
import About from 'pages/About';
import Sponsors from 'pages/Sponsors';
import Contact from 'pages/Contact';
import AboutHeader from 'components/AboutHeader';
import Header from 'components/Header';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          element={
            <>
              {/* Nav */}
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Introduce />} />
          <Route path="c" element={<Contact />} />
          <Route path="s" element={<Sponsors />} />
          <Route path="503" element={<ServiceUnavailable />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route
          element={
            <>
              {/* Nav */}
              <AboutHeader />
              <Outlet />
            </>
          }
        >
          <Route path="a" element={<About />}></Route>
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
