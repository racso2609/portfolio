import { FC } from 'react';
import { Button } from '../../components/styled/buttons';
import { Container } from '../../components/styled/containers';

const Home: FC = () => {
    return (
        <Container padding="20px" margin="20px" width="100vw">
            <p>Home</p>
            <Button>Hola</Button>
        </Container>
    );
};

export default Home;
