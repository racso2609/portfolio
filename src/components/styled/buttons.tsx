import styled from 'styled-components';
import { GeneralProps } from '../../interfaces/styles';
import { addStyles } from '../../utils/styled';

type ButtonProps = GeneralProps;

export const Button = styled.button<Partial<ButtonProps>>`
    all: unset;
    cursor: pointer;
    padding: 5px 30px;
    border-radius: 20px;
    background-color: blue;
    font-size: 1.2rem;
    font-weight: bold;
    color: ${(props) => props.theme.fg};
    ${(props) => addStyles(props)};
`;
