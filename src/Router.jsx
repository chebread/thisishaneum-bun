import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Introduce from 'pages/Introduce';
import NotFoundPage from 'pages/ErrorPages/NotFoundPage';
import ServiceUnavailable from 'pages/ErrorPages/ServiceUnavailable';
import About from 'pages/About';
import Sponsors from 'pages/Sponsors';
import Contact from 'pages/Contact';

const Router = ({ children }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={children}>
        <Route path="/" element={<Introduce />} />
        <Route path="a" element={<About />}></Route>
        <Route path="c" element={<Contact />} />
        <Route path="s" element={<Sponsors />} />
        <Route path="503" element={<ServiceUnavailable />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Router;
