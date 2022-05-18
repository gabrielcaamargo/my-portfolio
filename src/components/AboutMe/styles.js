import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 600px;



  h1{
    font-size: 54px;
    margin-bottom: 8px;
  }

  .content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: justify;
    margin-top: 24px;

    p{
      margin-right: 40px;
      font-size: 20px;
      line-height: 36px;
      width: 70%;
    }

    img{
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.blue.main};
      margin: 16px auto;
      width: 45%;
    }

    @media (max-width: 600px){
      flex-direction: column;
      text-align: center;

      img{
        width: 50%;
      }
    }

    @media (max-width: 768px){
      flex-direction: column;
      text-align: center;

      p{
        margin: 0 auto;
        width: 90%;
      }
      img{
        width: 60%;
      }
    }
  }
`;
