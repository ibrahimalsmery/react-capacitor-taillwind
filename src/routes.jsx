import IndexPage from './pages/index/IndexPage';
import AboutPage from './pages/about/AboutPage';
import { createBrowserRouter } from 'react-router-dom';
import LayoutMain from './pages/layouts/LayoutMain';

export const routes = createBrowserRouter([
    {
        path: '/', element: <LayoutMain />, children: [
            { path: '/', element: <IndexPage /> },
            { path: '/about', element: <AboutPage /> }
        ]
    }
]);
