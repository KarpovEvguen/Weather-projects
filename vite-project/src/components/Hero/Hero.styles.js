import styled from "styled-components";

export const HeroWrapper = styled.section`
background-image: url('/src/img/cat.jpg');
background-size: cover;
background-position: center;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const Content = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
`;

export const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 18px;
  max-width: 300px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 80px;
  background: #fff;
`;

export const Date_p = styled.p`
  font-size: 18px;
`;

export const Search = styled.div`
  display: flex;
  width: 500px;
  margin: 0 auto;
`;

export const Input = styled.input`
  flex: 1;
  padding: 14px;
  border: none;
  border-radius: 10px 0 0 10px;
  outline: none;
`;

export const WeatherInfo = styled.div`
  margin-top: 30px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
`;

export const CityName = styled.h2`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const Temperature = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 15px 0;
`;

export const Description = styled.p`
  font-size: 18px;
  text-transform: capitalize;
  margin-bottom: 10px;
`;

export const WeatherIcon = styled.img`
  width: 80px;
  height: 80px;
`;

export const SearchBtn = styled.button`
  background: #f4a261;
  border: none;
  padding: 0 20px;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
`;