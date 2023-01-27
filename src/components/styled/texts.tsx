import styled from 'styled-components';
import { addStyles } from '../../utils/styled';

export interface SpanProps {
    color: string;
    fontSize: string;
    weight: string;
}
export const Span = styled.span<Partial<SpanProps>>`
    color: ${(props) => props.theme.fg};
    ${(props) => addStyles(props)};
`;

export const P = styled.p<Partial<SpanProps>>`
    color: ${(props) => props.theme.fg};
    ${(props) => addStyles(props)};
`;
