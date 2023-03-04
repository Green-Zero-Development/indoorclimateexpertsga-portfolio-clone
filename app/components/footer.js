'use client';

import Link from 'next/link';
import styled from 'styled-components';

function getYear() {
    return new Date().getFullYear();
}

const FooterStyle = styled.footer`
   background-color: #1d0d36;
   color: #ffffff;
   font-family: synthese, sans-serif;
`;

const FooterBox = styled.div`
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   max-width: 1280px;
   margin: auto;
   padding: 56px 16px 150px 16px;
   @media (min-width: 996px) {
        padding-bottom: 0px;
    }
   > * {
        &:nth-child(4) {
            a {
                font-weight: 200 !important;
                font-size: 14px;
                opacity: 0.7;
            }
            div {
                padding-top: 5px !important;
            }
        }
   }
`;

const FooterLogo = styled.a`
    grid-column: span 12 / span 12;
    padding-bottom: 40px;
    @media (min-width: 1200px) {
        grid-column: span 2 / span 2;
        padding-bottom: 0px;
    }
`

const FooterLi = styled.li`
    grid-column: span 12 / span 12;
    padding-bottom: 40px;
    list-style: none;
    @media (min-width: 576px) {
        grid-column: span 4 / span 4;
    }
    @media (min-width: 992px) {
        grid-column: span 2 / span 2;
        padding-bottom: 0px;
    }
`

const FooterLiParent = styled.a`
    font-weight: 700;
    &:hover {
        text-decoration: underline;
    }
`

const FooterLiChildBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 8px;
`

const FooterLiChild = styled.a`
    width: 100%;
    font-size: 14px;
    font-weight: 200;
    opacity: 0.70;
    padding-bottom: 5px;
    &:hover {
        text-decoration: underline;
    }
`

const FooterContact = styled.div`
    grid-column: span 12 / span 12;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 576px) {
        grid-column: span 3 / span 3;
    }
    @media (min-width: 1200px) {
        grid-column: span 2 / span 2;
    }
`

const FooterContactTitle = styled.h6`
    width: 100%;
    font-weight: 700;
    padding-bottom: 5px !important;
`

const FooterLogos = styled.div`
    display: flex;
    flex-wrap: wrap;
    grid-column: span 12 / span 12;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    margin-left: auto;
    text-align: center;
    padding-top: 80px;
    @media (min-width: 576px) {
        grid-column: span 8 / span 8;
        padding-top: 0px;
    }
    @media (min-width: 992px) {
        grid-column: span 3 / span 3;
    }
    @media (min-width: 1200px) {
        grid-column: span 2 / span 2;
    }
`

const FooterBottomBorder = styled.div`
    background-image: url('https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/HVAC_Pattern_elsv73.svg');
    background-size: contain;
    width: 100%;
    height: 24px;
`

const FooterContactDetails = styled.div`
    width: 100%;
    font-size: 14px;
    font-weight: 200;
    opacity: 0.70;
`

const Spacer = styled.div`
    padding: 5px 0px 5px 0px;
`

const Insta = styled.a`
    margin-right: 25px;
`

const FooterLogoSingle = styled.span`
    padding-bottom: 10px;
    img {
        margin-left: auto;
    }
`

const CopyrightBox = styled.div`
    grid-column: span 12 / span 12;
    justify-content: space-between;
    width: 100%;
    border-top: 2px solid #ffffff;
    padding: 30px 0 30px 0;
    margin-top: 56px;
    @media (min-width: 576px) {
        display: flex;
    }
`

const CopyrightText = styled.p`
    font-size: 12px;
    opacity: 0.7;
    padding-bottom: 32px;
    @media (min-width: 576px) {
        padding-bottom: 0px;
    }
`

export default function Footer({logos, physicalAddresses, phoneNumbers, socialMedia, footerLogos, footerMenu}) {

    const footerLogo = logos[0].acf.footer_logo.url;
    const street = physicalAddresses[0].values[0].street;
    const city = physicalAddresses[0].values[0].city;
    const state = physicalAddresses[0].values[0].state;
    const zip = physicalAddresses[0].values[0].zip;
    const phone = phoneNumbers[0].values[0].value;
    const instagram = socialMedia[0].acf.value_list[0].value;
    const facebook = socialMedia[0].acf.value_list[1].value;
    const footerLogosDisplay = footerLogos[0].values;

    return (
        <FooterStyle>
            <FooterBox>
                <FooterLogo href="">
                    <img src={footerLogo} />
                </FooterLogo>
                {footerMenu.map((item) => {
                    if (item.children) {
                        return (
                            <FooterLi key={item.id}>
                                <FooterLiParent href={item.url}>{item.title}</FooterLiParent>
                                <FooterLiChildBox>
                                {Object.keys(item.children).map((key, index) => {
                                    return (
                                        <FooterLiChild key={index} href={item.children[key].url}>{item.children[key].title}</FooterLiChild>
                                    );
                                })}
                                </FooterLiChildBox>
                            </FooterLi>
                        )
                    } else {
                        if (item.url.includes("#")) {
                            return (
                                <FooterLi key={item.id}>
                                    <a href={item.url}>{item.title}</a>
                                </FooterLi>
                            )
                        } else {
                            return (
                                <FooterLi key={item.id}>
                                    <Link href={item.url}>{item.title}</Link>
                                </FooterLi>
                            )
                        }
                    }
                })}
                <FooterContact>
                    <FooterContactTitle>Contact Us</FooterContactTitle>
                    <FooterContactDetails>
                        {street}
                        <Spacer />
                        {city}, {state} {zip}
                        <Spacer />
                        {phone}
                        <Spacer />
                        <Spacer />
                    </FooterContactDetails>
                    <Insta href={instagram}>
                        <svg width="24px" height="24px" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </Insta>
                    <a href={facebook}>
                        <svg width="24px" height="24px" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"/></svg>
                    </a>
                </FooterContact>
                <FooterLogos>
                    {footerLogosDisplay.map((item) => {
                        return (
                            <FooterLogoSingle key={item.id}>
                                <img src={item.logo.url} />
                            </FooterLogoSingle>
                        )
                    })}
                </FooterLogos>
                <CopyrightBox>
                    <CopyrightText>&copy; {getYear()} Indoor Climate Experts | All Rights Reserved</CopyrightText>
                    <a href="https://madebypioneer.com/">
                        <img src="https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/pioneer.svg" />
                    </a>
                </CopyrightBox>
            </FooterBox>
            <FooterBottomBorder></FooterBottomBorder>
        </FooterStyle>
    );
}