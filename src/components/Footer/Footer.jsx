import {
    FooterWrapper,
    Logo,
    Block,
    Title,
    Text,
    Socials,
    Button
  } from './Footer.styled'
  
  import logo from '/src/img/logo.png'
  import whatsapp from '/src/img/whatsapp.png'
  import instagram from '/src/img/instagram.png'
  import facebook from '/src/img/facebook.png'
  
  export default function Footer() {
    return (
      <FooterWrapper>
        <Logo src={logo} alt="logo" />
  
        <Block>
          <Title>Address:</Title>
          <Text>
            Svobody str. 35{'\n'}
            Kyiv{'\n'}
            Ukraine
          </Text>
        </Block>
  
        <Block>
          <Title>Contact us</Title>
  
          <Socials>
            <Button>
              <img src={instagram} alt="instagram" />
            </Button>
  
            <Button>
              <img src={facebook} alt="facebook" />
            </Button>
  
            <Button>
              <img src={whatsapp} alt="whatsapp" />
            </Button>
          </Socials>
        </Block>
      </FooterWrapper>
    )
  }