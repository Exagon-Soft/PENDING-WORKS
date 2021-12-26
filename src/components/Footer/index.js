import React from "react";
import ExagonSoft from '../../images/exagonsoft.svg';
import FantasyMedia from '../../images/realmedia.svg';
import GameLife from '../../images/gamelife.svg';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLink to="home">Home</FooterLink>
                <FooterLink to="about">About</FooterLink>
                <FooterLink to="discover">Discover</FooterLink>
                <FooterLink to="services">Services</FooterLink>
                <FooterLink to="signup">Sign Up</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterTitle>Our Partners</FooterTitle>
                <Img src={ExagonSoft} alt="ExagonSoft" />
                <Img src={FantasyMedia} alt="ExagonSoft" />
                <Img src={GameLife} alt="ExagonSoft" />
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
