import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: auto;
  height: 100vh;

  @keyframes downArrowAnimation {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

  .down-arrow{
    margin: 5rem auto 0;
    font-size: 2.2rem;
    animation: 2s ease-in infinite downArrowAnimation;
}
`

export const Name = styled.h1`
  font-family: 'Commissioner', sans-serif;
  font-weight: 700;
  font-size: 7rem;
  text-align: center;
  line-height: 70px;
  text-transform: uppercase;
  margin-bottom: 2rem;
  span{
    color: #3E02F2;
  }

  @media (max-width: 600px){
    font-size: 4rem;
    margin-bottom: 1rem;
    line-height: 43px;
  }
`

export const Role = styled.p`
  font-weight: 500;
  font-size: 4rem;
  text-align: center;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px white;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 600px){
    font-size: 3rem;
  }
`

