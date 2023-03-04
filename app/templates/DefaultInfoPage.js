'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
import CertifiedHvacSpecialists from '../components/CertifiedHvacSpecialists.js';
import MapSection from '../components/MapSection.js';
import TestimonialSlider from '../components/TestimonialSlider.js';
import PreFooterCtas from '../components/PreFooterCtas.js';

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

const ContentBoxWrapper = styled.div`
    max-width: 76rem;
    margin: 12rem auto 0 auto;
    width: 100%;
    padding: 0rem 16px 0rem 16px;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: 2rem;
    }
`

const ContentBox = styled.div`
    grid-column: span 12 / span 12;
    display: flex;
    flex-wrap: wrap;
    background-color: #EBE3F8;
    padding-bottom: 2rem;
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05);
    margin-bottom: 8rem;
    @media (min-width: 768px) {
        grid-column: span 6 / span 6;
        
    }
    .image {
        width: 91.66667%;
        background-size : cover;
        margin: 0 auto 0 auto;
        margin-top: -5rem;
        padding-top: 8rem;
        padding-bottom: 8rem;
    }
    .content-wrapper {
        width: 91.66667%;
        margin: 0 auto 0 auto;
    }
    h3 {
        font-size: 1.875rem;
        color: #482188;
        padding-top: 1.5rem;
        @media (min-width: 576px) {
            font-size: 2.5rem;
        }
    }
    .content-box-seperator {
        width: 3rem;
        max-height: 1px;
        margin: 0.5rem 0 1rem 0;
        background-color: rgb(72, 33, 136);
        padding-bottom: 2px;
    }
    p {
        width: 91.66667%;
        font-size: .875rem;
        color: #482188;
        padding-bottom: 2rem;
        @media (min-width: 576px) {
            font-size: 1rem;
        }
    }
    .button-box {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .filled-button {
        width: 100%;
        margin-bottom: 1.5rem;
        @media (min-width: 1200px) {
            width: auto;
            margin-bottom: 0;
            margin-right: 1rem;
        }
    }
    .outline-button {
        width: 100%;
        @media (min-width: 1200px) {
            width: auto;
        }
    }
    }
`

// #endregion

export default function DefaultInfoPage({ pageData }) {

    const certifiedHvacSpecialists = pageData.global_sections[6];
    const defaultPageContentBoxes = pageData.global_sections[7];
    const mapSection = pageData.global_sections[1];
    const testimonialSlider = pageData.global_sections[2];
    const testimonials = pageData.testimonials;
    const preFooterCtas = pageData.global_sections[3];

    let heroLink = getButtonLink(pageData.acf.hero_section.button.link_to_where, pageData.acf.hero_section.button.onsite_link, pageData.acf.hero_section.button.offsite_link, pageData.acf.hero_section.button.file_link);
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
            <HeroWrapper>
                <HeroContent>
                    <h1>{pageData.acf.hero_section.title}</h1>
                    <p>{pageData.acf.hero_section.paragraph}</p>
                    <a href={heroLink} class='dark-outline-button'>
                        {pageData.acf.hero_section.button.text}
                    </a>
                </HeroContent>
                <HeroImageBox>
                    <HeroImage style={{ backgroundImage:`linear-gradient(270deg,rgba(255,255,255,0),rgba(255,255,255,1)),url(${pageData.acf.hero_section.image.url})` }}>
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

            <CertifiedHvacSpecialists certifiedHvacSpecialists={certifiedHvacSpecialists}></CertifiedHvacSpecialists>

            <ContentBoxWrapper>
                {defaultPageContentBoxes.acf.content_boxes.content_box.map((item) => {
                    let filledButtonLink = getButtonLink(item.filled_button.link_to_where, item.filled_button.onsite_link, item.filled_button.offsite_link, item.filled_button.file_link);
                    let outlineButtonLink = getButtonLink(item.outline_button.link_to_where, item.outline_button.onsite_link, item.outline_button.offsite_link, item.outline_button.file_link);
                    return (
                        <ContentBox>
                            <motion.div
                                initial={{ y: 15 }}
                                whileInView={{ y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5
                                }}
                                style={{ backgroundImage:`url(${item.image.url})` }}
                                className="image"
                            />
                            <div className="content-wrapper">
                                <h3>{item.title}</h3>
                                <div className="content-box-seperator"></div>
                                <p>{item.paragraph}</p>
                                <div className="button-box">
                                    <a href={filledButtonLink} className="filled-button">
                                        {item.filled_button.text}
                                    </a>
                                    <a href={outlineButtonLink} className="outline-button">
                                        {item.outline_button.text}
                                    </a>
                                </div>
                            </div>
                        </ContentBox>
                    );
                })}
            </ContentBoxWrapper>

            <MapSection mapSection={mapSection}></MapSection>
            <TestimonialSlider testimonialSlider={testimonialSlider} testimonials={testimonials}></TestimonialSlider>
            <PreFooterCtas preFooterCtas={preFooterCtas}></PreFooterCtas>
        </>
    )
}