import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBarWrapper from './components/NavBar/NavBarWrapper';
import ThemeProvider from './context/theme';
import Home from './pages/Home';
import LaboralExperience from './pages/LaboralExperience';
const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBarWrapper />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/laboral-experience',
                element: <LaboralExperience />,
            },
            {
                path: '/about-me',
                element: <LaboralExperience />,
            },
        ],
    },
]);

function App() {
    return (
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
