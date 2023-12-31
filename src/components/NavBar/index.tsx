import { faGear, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../styled/containers';
import { Icon } from '../styled/miscellany';
import ThemeSelector from '../ThemeSelector';

const navItems = [
    { name: 'projects', href: '/laboral-experience', icon: faGear },
    { name: 'about', href: '/about-me', icon: faUser },
];

const NavbarItem = styled(Link)`
    all: unset;
    width: auto;
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0px;

    font-size: 20px;
    &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.hover};
    }
`;

const Nav = styled.nav`
    all: unset;
    background-color: ${(props) => props.theme.bg2};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0;
`;

const LogoContainer = styled(Link)`
    all: unset;
    width: auto;
    cursor: pointer;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 20px 0;

    font-size: 20px;
`;

const NavBar: FC = () => {
    return (
        <Nav>
            <Container
                direction="column"
                justifyContent="center"
                textAlign="center"
            >
                <LogoContainer to="/">
                    <Icon icon={faHome} />
                </LogoContainer>
                {navItems.map((item, index) => {
                    return (
                        <NavbarItem to={item.href} key={item.name + index}>
                            <Icon icon={item.icon} />
                        </NavbarItem>
                    );
                })}
            </Container>
            <ThemeSelector />
        </Nav>
    );
};

export default NavBar;
