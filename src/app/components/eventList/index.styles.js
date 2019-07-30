import styled from "styled-components";

export const EventList =styled.div`
  display: flex;
`
export const Day = styled.div`
  background-color: ${props => props.theme.color.primary};
  color: ${props => props.theme.text.inverse};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 25px;
  text-align: center;
  margin: 0 20px;
`

export const Side = styled.div`
  background: linear-gradient(#fff, #fff) no-repeat center/2px 100%;
  padding-bottom: 30px;
`

export const Content = styled.div`
`