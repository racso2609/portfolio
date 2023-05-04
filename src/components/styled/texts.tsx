import styled from 'styled-components';
import { GeneralProps } from '../../interfaces/styles';
import { addStyles } from '../../utils/styled';

export interface SpanProps extends GeneralProps {
    color: string;
    fontSize: string;
    weight: string;
}
export const Span = styled.span<Partial<SpanProps>>`
    all: unset;

    font-family: 'Oswald', sans-serif;
    color: ${(props) => props.theme.fg};
    ${(props) => addStyles(props)};
`;

export const P = styled.p<Partial<SpanProps>>`
    all: unset;
    font-family: 'Oswald', sans-serif;
    color: ${(props) => props.theme.fg};
    ${(props) => addStyles(props)};
`;
