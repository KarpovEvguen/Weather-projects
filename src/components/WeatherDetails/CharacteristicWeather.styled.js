
import styled from 'styled-components';

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-content: center;
  align-items: stretch;
  gap: 24px;

  width: 100%;
  max-width: 1200px;
  margin: 60px auto;
  padding: 40px;
  box-sizing: border-box;

  border-radius: 20px;
  background: #e8e8e8;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    min-width: 0;
    min-height: 150px;
    padding: 20px 12px;
    box-sizing: border-box;

    border-radius: 10px;
    background: #d9d9d9;
    text-align: center;
    overflow-wrap: anywhere;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    padding: 24px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    margin: 30px auto;
    padding: 16px;

    & > div {
      min-height: 130px;
    }
  }
`;

export const Text = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: clamp(12px, 1.2vw, 16px);
`;

export const Title = styled.h3`
  margin: 12px 0;
  font-weight: 500;
  font-size: clamp(18px, 2vw, 32px);
  overflow-wrap: anywhere;
`;

export const TitleMax = styled.h3`
  margin: 12px 0 0;
  font-weight: 500;
  font-size: clamp(18px, 2vw, 32px);
  overflow-wrap: anywhere;
`;