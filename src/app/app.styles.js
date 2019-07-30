import styled, { keyframes } from 'styled-components';

/**
 * Animation
 */
const scaleUpBottom = keyframes`
  0% {
    transform: scale(0.5);
    transform-origin: 50% 100%;
  }
  100% {
    transform: scale(1);
    transform-origin: 50% 100%;
  }
`

/**
 * Main components
 */
export const Application = styled.div`
  text-align: left;
  background-color: ${props => props.theme.color.background};
  display: flex;
  max-width: 1200px;
  flex-direction: column;
`

export const Header = styled.div`
  font-size: 4em;
  line-height: 0.9;
  max-width: 800px;
  color: ${props => props.theme.text.primary}
  animation: ${scaleUpBottom} 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const Subheader = styled.div`
  margin: 20px 0;
  padding: 0 20px;
  background-color: ${props => props.theme.color.primary};
  font-size: 1.5em;
  color: ${props => props.theme.text.inverse};
`

export const Content = styled.div`
`

export const Year = styled.div`
  color: ${props => props.theme.text.primary}
  font-size: 1.5em;
  padding: 0 20px;
`

export const Month = styled.div`
  color: ${props => props.theme.text.primary}
  font-size: 1.5em;
  padding: 0 20px;
`

