import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from 'pages/Home';
import NotFoundPage from 'pages/NotFoundPage';
import ServiceUnavailable from 'pages/ServiceUnavailable';
import About from 'pages/About';
import Sponsors from 'pages/Sponsors';
import Contact from 'pages/Contact';

const Router = ({ children }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={children}>
        <Route path="/" element={<Home />} />
        <Route path="a" element={<About />} />
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
