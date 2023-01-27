import { FC } from 'react';
import { Button } from '../../components/styled/buttons';
import { Container } from '../../components/styled/containers';
import {P} from '../../components/styled/texts'

const Home: FC = () => {
    return (
        <Container padding="20px" margin="20px" width="100vw">
            <P>Home</P>
            <Button>Hola</Button>
        </Container>
    );
};

export default Home;
