'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
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
    padding: 3rem 16px 12rem 16px;
    overflow: hidden;
    @media (min-width: 576px) {
        padding-top: 6rem;
    }
    @media (min-width: 768px) {
        display: grid;
        padding: 3rem 16px 12rem 16px;
    }
`

const HeroContent = styled.div`
    grid-row: 1;
    grid-column: 1 / 8;
    color: #4b2884;
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
        white-space: pre-line;
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

// #endregion

export default function About({ pageData }) {

    const preFooterCtas = pageData.global_sections[3];

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
            <HeroWrapper>
                <HeroContent>
                    <h1>{pageData.acf.hero_section.title}</h1>
                    <p>{pageData.acf.hero_section.paragraph}</p>
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
            <PreFooterCtas preFooterCtas={preFooterCtas}></PreFooterCtas>
        </>
    )
}