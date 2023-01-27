import { FC } from 'react';
import styled from 'styled-components';
import { addStyles } from '../../utils/styled';
import { Container, ContainerProps, GridProps } from '../styled/containers';
import { Span, P } from '../styled/texts';

const navItems = [
    { name: 'projects', href: '/projects' },
    { name: 'about', href: '/about' },
];

const NavbarItem = styled.li`
    all: unset;
    width: auto;
    margin: 0 10px;
    cursor: pointer;
    padding: 10px 20px;
    display: block;
    align-items: center;
    &:hover {
        text-decoration: underline;
        background-color: ${(props) => props.theme.hover};
    }
`;
const NavbarItemsContainer = styled.ul<Partial<ContainerProps>>`
    all: unset;
    display: flex;
    ${(props) => addStyles(props)};
`;

const Nav = styled.nav<Partial<GridProps>>`
    all: unset;
    display: grid;
    height: auto;
    background-color: ${(props) => props.theme.bg2};
    ${(props) => addStyles(props)};
`;

const NavBar: FC = () => {
    return (
        <Nav columns=".2fr 1fr" padding="0 20px">
            <Container>
                <Span>logo</Span>
            </Container>
            <NavbarItemsContainer justifyContent="flex-end" width="100%">
                {navItems.map((item, index) => {
                    return (
                        <NavbarItem key={item.name + index}>
                            <P>{item.name}</P>
                        </NavbarItem>
                    );
                })}
            </NavbarItemsContainer>
        </Nav>
    );
};

export default NavBar;
