import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import NavBarWrapper from './components/NavBar/NavBarWrapper';
import { Container } from './components/styled/containers';
import ThemeProvider from './context/theme';
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
            <ThemeProvider>
        <Container height="100vh" background="bg" display="block">
                <RouterProvider router={router} />
        </Container>
            </ThemeProvider>
    );
}

export default App;
