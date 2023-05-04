import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '.';
import { Container } from '../styled/containers';
const NavBarWrapper: FC = () => {
    return (
        <Container background="bg" minHeight="100vh" width="100vw">
            <NavBar />
            <Container overflow="hidden auto" direction="column" width="100%">
                <Outlet />
            </Container>
        </Container>
    );
};

export default NavBarWrapper;
