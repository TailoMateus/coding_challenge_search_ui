import styled from 'styled-components'

export const WrapperList = styled.li`
  display: flex;
  padding: 10px 0;
  cursor: pointer;
`;

export const ExternalLink = styled.a`
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${(props) => props.theme.colors?.main};
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin-right: 5px;
  text-decoration: none;
  color: ${(props) => props.theme.colors?.main};
`