'use client';

import { motion } from "framer-motion";
import { useEffect } from 'react';
import styled from 'styled-components';

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "A page on this site":
        return (onSiteLink);
      case "Another site":
        return (offSiteLink);
      case "A file":
        return (fileLink);
      default:
        return ('/');
    }
}

// #region Styles

const HeroWrapper = styled.div`
    grid-template-columns: repeat(12, 1fr);
    column-gap: 4rem;
    align-items: start;
    max-width: 76rem;
    margin: 0 auto;
    padding: 3rem 16px 6rem 16px;
    overflow: hidden;
    @media (min-width: 576px) {
        padding-top: 6rem;
    }
    @media (min-width: 768px) {
        display: grid;
    }
`

const HeroContent = styled.div`
    grid-row: 1;
    grid-column: 1 / 8;
    color: #4b2884;
    white-space: pre-line;
    z-index: 2;
    @media (min-width: 1200px) {
        grid-column: 1 / 6;
    }
    h1 {
        font-size: 3rem;
        padding-bottom: 2rem;
        @media (min-width: 576px) {
            font-size: 4rem;
        }
        @media (min-width: 768px) {
            font-size: 4.5rem;
        }
    }
    p {
        padding-bottom: 3rem;
    }
    a {
        font-family: 'synthese', sans-serif !important;
        font-size: 1rem;
        text-decoration: underline;
        color: #4b2884;
    }
    .contact-form {
        padding-bottom: 50px;
    }
`

const HeroImageBox = styled.div`
    display: none;
    position: relative;
    grid-row: 1;
    grid-column: 6 / 14;
    @media (min-width: 768px) {
        display: block;
    }
`

const HeroImage = styled.div`
    padding-top: 14rem;
    padding-bottom: 14rem;
    background-size: cover;
    background-position: center;
`

const ContactBox = styled.div`
    max-width: 90rem;
    padding: 100px 16px 150px 16px;
    margin: 0 auto;
    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 2rem;
    }
    @media (min-width: 1440px) {
        grid-template-columns: repeat(5, 1fr);
        .spacer {
            display: block !important;
            width: 160px;
            height: 3px;
            margin-top: 30px;
            background-color: #482188;
        }
    }
    .spacer {
        display: none;
    }
    h2 {
        font-size: 2.25rem;
        color: #482188;
        padding-bottom: 1.25rem;
    }
    .contact-details {
        display: flex;
        flex-wrap: wrap;
        padding-right: 2rem;
        padding-bottom: 2rem;
        img {
            padding: 1rem 0 1rem 0;
        }
        a {
            width: 100%;
            font-family: synthese, sans-serif;
            color: #32175f;
            padding: 0rem 0 0.50rem 0;
        }
    }
`

// #endregion

export default function ScheduleAppointment({ pageData }) {

    const primaryPhone = pageData.site_data[3].acf.value_list[0].value;
    const secondaryPhone = pageData.site_data[3].acf.value_list[1].value;
    const primaryEmail = pageData.site_data[1].acf.value_list[0].value;
    const primaryAddress = pageData.site_data[2].acf.value_list[0];
    const googleMaps = pageData.site_data[6].acf.link;

    useEffect(() => {
        const cogForm = document.createElement('script');
        const cogFormBox = document.getElementById('contact-form');
        cogForm.src = "https://www.cognitoforms.com/f/seamless.js";
        cogForm.setAttribute("data-key", "IG83lPQs7UKU2FDeP--HlA");
        cogForm.setAttribute("data-form", "59");
        if (cogFormBox.hasChildNodes() == true) {
    
        } else {
            cogFormBox.appendChild(cogForm);
        }
    }, []);

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
            <HeroWrapper>
                <HeroContent>
                    <h1>{pageData.acf.title}</h1>
                    <div id="contact-form" className="contact-form">
                      
                    </div>
                </HeroContent>
                <HeroImageBox>
                    <HeroImage style={{ backgroundImage:`linear-gradient(270deg,rgba(255,255,255,0),rgba(255,255,255,1)),url(${pageData.acf.hero_image.url})` }}>
                        <motion.div 
                            initial={{ x: -24, y: 25 }}
                            whileInView={{ x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5
                            }}
                            className="red-box"
                        />
                        <motion.div 
                            initial={{ x: 24, y: -25 }}
                            whileInView={{ x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5
                            }}
                            className="blue-box"
                        />
                    </HeroImage>
                </HeroImageBox>
            </HeroWrapper>
            <ContactBox>
                <h2>{pageData.acf.information_title}</h2>
                <div className="spacer"></div>
                <div className="contact-details">
                    <img src="https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/phone-icon_d9opqi.svg" />
                    <a href={`tel:${primaryPhone}`}>{primaryPhone}</a>
                    <a href={`tel:${secondaryPhone}`}>{secondaryPhone}</a>
                </div>
                <div className="contact-details">
                    <img src="https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/address-icon_s6a2tb.svg" />
                    <a href={googleMaps} target="_blank">
                        {primaryAddress.street}
                        <br />
                        {primaryAddress.city}, {primaryAddress.state} {primaryAddress.zip}
                    </a>
                </div>
                <div className="contact-details">
                    <img src="https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/email-icon_e5gxqu.svg" />
                    <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>
                </div>
            </ContactBox>
        </>
    )
}