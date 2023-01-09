import { FC } from 'react';
import { Container } from '../styled/containers';
const navItems = [{ name: 'about', href: '/about' }];
const NavBar: FC = () => {
    return (
        <Container>
            {navItems.map((item) => {
                return <span>{item.name}</span>;
            })}
        </Container>
    );
};

export default NavBar;
