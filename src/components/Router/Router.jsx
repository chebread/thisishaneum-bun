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
import Sponsors from 'pages/Sponsors';
import Contact from 'pages/Contact';
import AboutHeader from 'components/About/AboutHeader';
import Header from 'components/Header';
import Tech from 'pages/About/Tech';
import Info from 'pages/About/Info';
import Contacts from 'pages/About/Contacts';
import Careers from 'pages/About/Careers';
import Navigator from 'components/Navigator';
import About from 'pages/About/About';
import Projects from 'pages/About/Projects';
import IntroduceHeader from 'components/Introduce/IntroduceHeader';
import ErrorPage from 'components/ErrorPages/ErrorPage';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        element={
          <>
            <Navigator />
            <Outlet />
          </>
        }
      >
        <Route
          element={
            <>
              <IntroduceHeader />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Introduce />} />
        </Route>
        <Route
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route path="c" element={<Contact />} />
          <Route path="s" element={<Sponsors />} />

          <Route path="503" element={<ServiceUnavailable />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route
          element={
            <>
              <AboutHeader />
              <Outlet />
            </>
          }
        >
          <Route path="a">
            <Route index={true} element={<About />}>
              {/* route r 에 element로 위치하면 이상함 */}
            </Route>
            <Route path="t" element={<Tech />} />
            <Route path="i" element={<Info />} />
            <Route path="c" element={<Contacts />} />
            <Route path="j" element={<Careers />} />
            <Route path="p" element={<Projects />} />
          </Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
