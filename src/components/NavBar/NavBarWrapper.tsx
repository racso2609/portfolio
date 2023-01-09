import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '.';
const NavBarWrapper: FC = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default NavBarWrapper;
