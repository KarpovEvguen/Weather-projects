import React from "react";
import {
  HeroWrapper,
  Overlay,
  Content,
  Title,
  Row,
  Text,
  Divider,
  Date,
  Search,
  Input,
  SearchBtn
} from "./Hero.styles";

const Hero = () => {
  return (
    <HeroWrapper>
      <Overlay />

      <Content>
        <Title>Weather dashboard</Title>

        <Row>
          <Text>
            Create your personal list of favorite cities and always be aware of the weather.
          </Text>

          <Divider />

          <Date>
            October 2023 <br />
            Friday, 13th
          </Date>
        </Row>

        <Search>
          <Input placeholder="Search location..." />
          <SearchBtn>Search</SearchBtn>
        </Search>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;