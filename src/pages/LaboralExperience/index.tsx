import { FC } from 'react';
import { Container } from '../../components/styled/containers';
import { P } from '../../components/styled/texts';
const LaboralExperience: FC = () => {
    return (
        <>
            <Container width="100%" direction="column">
                <Container alignItems="end" width="auto">
                    <h2>Laboral Experience</h2>
                </Container>
                <Container>
                    <P>Insert carrusel with all jobs from linkeding api</P>
                </Container>

                <Container alignItems="end" width="auto">
                    <h2>Personal projects</h2>
                </Container>
                <Container>
                    <P>Insert carrusel with all personal projects </P>
                </Container>
            </Container>
        </>
    );
};

export default LaboralExperience;
