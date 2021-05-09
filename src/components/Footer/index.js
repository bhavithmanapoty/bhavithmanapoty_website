import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink} from './FooterElements'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaLinkedin,
    FaGithub
} from 'react-icons/fa'
import logo from "../../images/logo1.png"

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }


    return (
        <FooterContainer id="contact">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems href="//drive.google.com/file/d/139poBSnbWkEiTecMxbEkgAg24a5eQcKi/view?usp=sharing" target="_blank" aria-label="CV">
                            <FooterLinkTitle>VIEW CV</FooterLinkTitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <img className="FLogo" src={logo} alt="logo.." />
                        </SocialLogo>
                        <WebsiteRights>Bhavith Manapoty © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/bhavith.stark.3" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="//www.instagram.com/bb20486/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>

                            <SocialIconLink href="//www.youtube.com/channel/UCiOXyIR3WWeTYuZJQJNLxAw" target="_blank" aria-label="YouTube">
                                <FaYoutube />
                            </SocialIconLink>

                            <SocialIconLink href="//www.linkedin.com/in/bhavith-manapoty-09bb131a6/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>

                            <SocialIconLink href="//www.github.com/bhavithmanapoty" target="_blank" aria-label="GitHub">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
