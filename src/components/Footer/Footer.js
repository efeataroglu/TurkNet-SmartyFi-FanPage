import SocialIcons from "../SocialIcons/SocialIcons";
import { Container } from "../styles/Container.styled";
import { Flex } from "../styles/Flex.styled";
import { StyledFooter } from "../styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo.svg" alt="" />

        <Flex>
          <ul>
            <li style={{ fontWeight: "bold", color: "#000" }}>Bizi Tanıyın</li>
            <li>
              Türkiye’nin en hızlı büyüyen yeni nesil telekom operatörü
              TurkNet’e hoş geldiniz.
            </li>
            <li>0850 288 82 65</li>
            <li>info@turk.net</li>
          </ul>
          <ul>
            <li style={{ fontWeight: "bold", color: "#000" }}>Hakkımızda</li>
            <li>Şeffaflık Raporu</li>
            <li>Bizden Haberler</li>
            <li>Ekibimize Katıl</li>
            <li>Bilgi Toplumu Hizmetleri</li>
            <li>Blog</li>
            <li>İletişim</li>
          </ul>

          <ul>
            <li style={{ fontWeight: "bold", color: "#000" }}>Hizmetler</li>
            <li>1000 Mbps İnternet</li>
            <li>Altyapı Hızı Sorgulama</li>
            <li>Abonelik Başvurusu</li>
            <li>Fiber İnternet</li>
            <li>Kurulum Hizmetleri</li>
            <li>Taahhütsüz İnternet</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; Copyright © 2023 TurkNet İletişim Hizmetleri A.Ş.</p>
      </Container>
    </StyledFooter>
  );
}
