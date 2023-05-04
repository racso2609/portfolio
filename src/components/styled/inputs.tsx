import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { GeneralProps } from '../../interfaces/styles';
import { addStyles } from '../../utils/styled';

interface SwitchPropsType extends GeneralProps, PropsWithChildren {
    isActive: boolean;
}

export const Switch = styled.div<SwitchPropsType>`
    all: unset;
    width: 50px;
    color: ${(props) => props.theme.fg};

    background-color: ${(props) =>
        props.isActive ? props.theme.active : props.theme.unactive};

    border-radius: 20px;
    position: relative;
    transition: 0.2s;
    padding: 0 10px 0 0;
    & > .icon {
        width: 20px;
        height: 20px;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) =>
            props.isActive ? props.theme.bg : props.theme.bg2};
        border-radius: 100%;
        transition: 0.2s;
        translate: ${(props) => (props.isActive ? '100%' : '')};
    }
    ${(props) => addStyles(props)};
`;
