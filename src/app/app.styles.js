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
  background-color: #0f1013;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  font-size: 2vh;
  animation: ${scaleUpBottom} 0.7s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
`

export const Subheader = styled.div`
  background-color: #ffff00;
  front-size: 1.5vh
  color: #000000;
`

export const Content = styled.div`
`

export const Year = styled.div``

export const Month = styled.div`
`

