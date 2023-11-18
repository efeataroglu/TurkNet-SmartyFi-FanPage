import {
  StyledHeader,
  Nav,
  TNLogo,
  Logo,
  Image
} from "../styles/Header.styled";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { Button } from "../styles/Button.styled";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <Container>
          <Nav>
            <TNLogo src="./images/logo.svg" />
            <Logo src="./images/logo.png" alt="" />
            <Button bg="#fff" color="#1a4784" br="2px">
              Abone ol
            </Button>
          </Nav>
          <Flex>
            <div>
              <h1>Yapay Zeka Destekli Akıllı Wi-Fi SmartyFi</h1>
              <p>
                TurkNet, Türkiye’deki internet deneyimini bir kez daha yenilikçi
                bir adım atarak değiştiriyor! Yapay zeka destekli internet
                deneyimi, sadece GigaFiber’lilere özel TurkNet SmartyFi’da!
              </p>
              <Button bg="#1a4784" color="#fff">
                Adresimde GigaFiber Var mı?
              </Button>
            </div>
            <Image src="./images/banner.jpeg" alt="" />
          </Flex>
        </Container>
      </StyledHeader>
    </>
  );
}
