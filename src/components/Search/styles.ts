import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin: 20px 0 40px;
`

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border: 2px ${(props) => props.theme.colors?.main} solid;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding-left: 20px;
  box-sizing: border-box;

  &:focus {
    border: 0;
  }
`

export const Button = styled.button`
  background-color: ${(props) => props.theme.colors?.main};
  color: ${(props) => props.theme.colors?.default_white};
  padding: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-weight: 600;
  cursor: pointer;
`