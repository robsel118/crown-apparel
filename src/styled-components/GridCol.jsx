import styled from 'styled-components';

export const GridCol = styled.div`
  display: grid;
  justify-items: ${props => props.alignemnt || 'center'};
  grid-row-gap: 3rem;
  column-gap: 2rem;
  grid-template-columns: repeat(${props => props.column}, 1fr);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
    column-gap: 0rem;
  }
`;
