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
    0%{
      opacity: 1;
      transform: translateY(-15px);
    }

    50%{
      opacity: 1;
    }

    100%{
      opacity: 0;
      transform: translateY(15px);
    }
}

  .down-arrow{
    margin: 7rem auto 0;
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
  -webkit-text-stroke: 1px white;
  -webkit-font-smoothing: antialiased;

  @media (max-width: 600px){
    font-size: 2rem;
  }

  .typewriter-cursor{
    -webkit-text-fill-color: #EFEDFD;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px white;
    -webkit-font-smoothing: antialiased;
  }
`

