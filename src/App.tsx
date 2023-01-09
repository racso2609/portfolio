import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import NavBarWrapper from './components/NavBar/NavBarWrapper';
import Home from './pages/Home';
const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBarWrapper />,
        children: [{ path: '/', element: <Home /> }],
    },
]);
function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
