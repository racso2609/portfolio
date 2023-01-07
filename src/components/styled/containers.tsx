import styled from "styled-components";
import { GeneralProps } from "../../interfaces/styles";
import { addStyles } from "../../utils/styled";

interface ContainerProps extends GeneralProps{
  alignItems: string;
  justifyContent: string;
}

interface GridProps extends GeneralProps{
  gap: string;
  columns: string;
  rows: string;

  alignContent: string;
  justifyItems: string;
}

type ContainerType = Partial<ContainerProps>
type GridType = Partial<GridProps>

export const Container = styled.div<ContainerType>`
  ${props=>addStyles(props)}
`
export const Grid = styled.div<GridType>``
