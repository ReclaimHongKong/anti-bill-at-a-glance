import styled from "styled-components";

export const EventItem = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
  color: #ffffff;
`

export const TimelineHeader = styled.div`
  display: inline-flex;
  padding: 0 5px;
  background: ${props => props.theme.color.primary};
  color: ${props => props.theme.text.inverse};
`

export const TimelineContent = styled.div`
  color: ${props => props.theme.text.primary};
`

export const ScarificationHeader = styled.div`
  display: inline-flex;
  padding: 0 5px;
  background: ${props => props.theme.text.secondary};
  color: ${props => props.theme.text.inverse};
`

export const ScarificationContent = styled.div`
  color: ${props => props.theme.text.secondary};
`

export const DemandHeader = styled.div`
  color: ${props => props.theme.text.primary};
  font-size: 55px;
  line-height: 0.9;
`

export const DemandList = styled.ol`
  counter-reset: my-counter;
  list-style: none;
  background: ${props => props.theme.text.primary};
  color: ${props => props.theme.text.inverse};
  margin: 0;
  padding: 0;
  width: 350px;
`

export const DemandItem = styled.li`
  counter-increment: my-counter;
  line-height: 1;
  display: flex;
  font-size: 20px;
  padding: 10px 0;

  &:before {
    content: counter(my-counter);
    font-size: 40px;
    padding: 0 10px;
  }
`

export const ResponseContent = styled.div`
  color: ${props => props.theme.text.alternative};
`
