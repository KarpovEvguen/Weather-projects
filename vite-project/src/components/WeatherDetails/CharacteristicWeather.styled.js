import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 60px auto;
  max-width; 1200px;
  width: 100%;

  border-radius: 20px;
  width: 76.3vw;
  padding: 40px 20px;

  row-gap: 2.8vw;
  column-gap: 4vw;
  background: #e8e8e8;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    width: 20.4vw;
    padding: 20px 0;
    background: #d9d9d9;
  }

  & > div > img {
    width: 6vw;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    & > div {
      width: 60vw;
    }

    & > div > img {
      width: 15.3vw;
    }
  }
`

export const Text = styled.p`
  font-weight: 500;
  font-size: clamp(0.63rem, calc(0.484rem + 0.573vw), 1rem);

  @media (max-width: 600px) {
    font-size: 3vw;
  }
`

export const Title = styled.h3`
  font-weight: 500;
  font-size: clamp(0.88rem, calc(0.453rem + 1.719vw), 2rem);
  padding: 10px 0 20px;

  @media (max-width: 600px) {
    font-size: 5vw;
  }
`

export const TitleMax = styled.h3`
  font-weight: 500;
  font-size: clamp(0.88rem, calc(0.453rem + 1.719vw), 2rem);
  padding: 10px 0 0;

  @media (max-width: 600px) {
    font-size: 5vw;
  }
`