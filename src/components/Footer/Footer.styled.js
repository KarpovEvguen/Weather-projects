import styled from 'styled-components'

export const Button = styled.button`
  border: 0;
  background: rgba(0, 0, 0, 0);
`

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  background: #ffb36c;
  padding: 2.8vw 124px 4.5vw 10.6vw;
  gap: 103px;

  @media (max-width: 834px) {
    gap: 10vw;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 682px) {
    gap: 10vw;
    flex-direction: column;
    padding: 40px 0px;

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`

export const Title = styled.p`
  font-weight: 500;
  font-size: clamp(0.75rem, calc(0.656rem + 0.382vw), 1rem);

  @media (max-width: 682px) {
    font-size: 4vw;
  }
`

export const Text = styled.p`
  font-weight: 500;
  font-size: clamp(0.5rem, calc(0.406rem + 0.382vw), 0.75rem);
  width: 92px;
  padding: 10px 0 0;

  @media (max-width: 682px) {
    text-align: center;
    width: 30vw;
    font-size: 3vw;
  }
`

export const Socials = styled.div`
  display: flex;
  gap: 20px;
  padding: 10px 0 0;
`

export const Logo = styled.img`
  width: clamp(3.13rem, calc(2.187rem + 3.82vw), 5.63rem);

  @media (max-width: 682px) {
    width: 16vw;
  }
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`