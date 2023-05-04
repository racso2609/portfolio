import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../components/styled/containers';
import { Icon } from '../../components/styled/miscellany';
import { P, Span } from '../../components/styled/texts';

const Title = styled(P)`
    font-size: 100px;
    font-weight: 900;
`;

const Home: FC = () => {
    return (
        <>
            <Container
                width="100%"
                height="100vh"
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
                <Container alignItems="end" width="auto">
                    <Title>RACSO</Title>
                    <Icon icon={faCircle} />
                </Container>
                <Span>
                    Im oscar, a FullStack-Javasctipy and blockchain developer
                </Span>
            </Container>
            <Outlet />
        </>
    );
};

export default Home;
