'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
import GhostPirateCta from '../components/GhostPirateCta.js';
import MapSection from '../components/MapSection.js';
import TestimonialSlider from '../components/TestimonialSlider.js';
import PreFooterCtas from '../components/PreFooterCtas.js';

function toggleHeroSelect(selectElement) {
    const selectMenuBox = document.querySelector('#hero-info-swap-box');
    const selectMenuItem = document.querySelector('#hero-info-swap');
    selectMenuBox.classList.toggle('hero-select-on');
    selectMenuItem.classList.toggle('hero-select-on-drop');
}

function swapHeroContent() {
    const heroListHome = document.querySelectorAll("#hero-list-item-home");
    const heroListBiz = document.querySelectorAll("#hero-list-item-biz");
    const heroParagraphHome = document.querySelector("#hero-content-home");
    const heroParagraphBiz = document.querySelector("#hero-content-biz");
    for (let i = 0; i < heroListHome.length; i++) {
        heroListHome[i].classList.toggle('hide')
    }
    for (let i = 0; i < heroListHome.length; i++) {
        heroListBiz[i].classList.toggle('hide')
    }
    heroParagraphHome.classList.toggle('hide');
    heroParagraphBiz.classList.toggle('hide');
}

// #region Styles

const HeroWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 83.33333%;
    max-width: 76rem;
    margin: 0 auto 0 auto;
    padding-top: 3rem;
    padding-bottom: 6rem;
    @media (min-width: 576px) {
        padding-top: 6rem;
    }
`

const HeroToggleWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    color: #4B2884;
    z-index: 2;
    @media (min-width: 768px) {
        width: 75%!important;
    }
    @media (min-width: 1440px) {
        width: 55%!important;
    }
`

const HeroToggleMainTitle = styled.h1`
    font-size: 3rem;
    @media (min-width: 576px) {
        font-size: 4rem;
    }
    @media (min-width: 768px) {
        font-size: 4.5rem;
    }
    @media (min-width: 992px) {
        font-size: 6rem;
    }
`

const HeroToggleSelectWrapper = styled.div`
    display: inline;
    font-family: 'Rhode Med Cond', sans-serif;
    font-size: 3rem;
    padding-left: 0.5rem;
    @media (min-width: 576px) {
        font-size: 4rem;
        margin-top: -0.25rem;
    }
    @media (min-width: 768px) {
        font-size: 4.5rem;
    }
    @media (min-width: 992px) {
        font-size: 6rem;
    }
    ul {
        display: inline;
        text-align: left;
    }
    li {
        position: relative;
        display: inline;
        items-align: center;
        color: #763FD0;
        @media (min-width: 992px) {
            padding-left: 0.75rem;
    }
    .inside-list-item {
        position: relative;
        display: inline;
        height: 4rem;
        &:hover {
            cursor: pointer;
        }
        border-bottom: 4px solid #ff4d4d;
    }
    svg {
        display: inline;
        margin-left: 12px;
        height: 24px;
    }
    .hero-info-swap-box {
        position: absolute;
        left: 0;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        background-color: #fff;
        height: 0px;
        color: transparent;
    }
    .hero-info-swap {
        width: 100%;
        font-size: 0px;
        line-height: 1;
        padding-top: 1.25rem;
        padding-bottom: 1.25rem;
        &:hover {
            cursor: pointer;
        }
    }
    }
`

const HeroContentWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
    @media (min-width: 992px) {
        width: 75% !important;
    }
    @media (min-width: 1200px) {
        width: 66.66667% !important;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        font-family: synthese, sans-serif;
        font-size: .75rem;
        font-weight: 100;
        color: #763FD0;
        line-height: 1;
        padding-top: 1.25rem!important;
        padding-bottom: 0.5rem!important;
        @media (min-width: 576px) {
            font-size: .875rem !important;
        }
    }
    li {
        display: flex;
        align-items: center;
        width: 50%;
        padding-bottom: 0.75rem;
        p {
            padding-left: 0.5rem;
        }
    }
    .hero-paragraph {
        font-family: synthese, sans-serif;
        width: 100%;
        font-size: .875rem;
        font-weight: 700 !important;
        color: #4b2884;
        padding-top: 1rem !important;
        padding-bottom: 2.5rem !important;
        @media (min-width: 576px) {
            width: 83.33333% !important;
            font-size: 1rem !important;
        }
    }
    .hide {
        display: none;
    }
    .filled-button {
        width: 100%;
        margin-bottom: 1.5rem;
        @media (min-width: 768px) {
            width: auto;
            margin-bottom: 0;
            margin-right: 1rem;
        }
    }
    .outline-button {
        width: 100%;
        @media (min-width: 768px) {
            width: auto;
        }
    }
    }
`

const HeroImageBox = styled.div`
    display: none;
    position: absolute;
    right: 0;
    width: 58.33333%;
    margin: 0 auto 0 auto;
    @media (min-width: 768px) {
        display: block;
    }
`

const HeroImage = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-size : cover;
    background-repeat: no-repeat;
    padding-top: 14rem;
    padding-bottom: 14rem;
`

const AirQuality = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 76rem;
    margin: 0 auto 0 auto;
    padding: 1.25rem 16px 0rem 16px;
`

const AirQualityTitle = styled.div`
    width: 100%;
    margin: 0 auto 0 auto;
    h2 {
        font-size: 2.25rem;
        color: #482188;
        text-align: center;
        @media (min-width: 768px) {
            font-size: 3.5rem !important;
        }
    }
`

const AirQualityContentWrapper = styled.div`
    width: 100%;
    padding-top: 8rem;
    @media (min-width: 576px) {
        padding-top: 12rem;
    }
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
        margin-bottom: 0rem;
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

const CommitmentSection = styled.div`
    max-width: 76rem;
    margin: 0 auto 0 auto;
    padding: 120px 16px 100px 16px;
    text-align: center;
    .icon-box {
        align-items: center;
        padding-top: 2rem;
        text-align: left;
        p {
            font-size: 1.15rem;
            color: #482188;
            white-space: pre-line;
            padding-top: 0.8rem;
        }
        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 2rem;
        }
        @media (min-width: 992px) {
            column-gap: 4rem;
        }
    }
    .icon-title {
        display: flex;
        align-items: center;
        justify-content: between;
        h4 {
            font-size: 2.25rem;
            color: #482188;
            padding-left: 0.8rem;
        }
    }
    h2 {
        font-size: 2.25rem;
        color: #482188;
        padding-bottom: 0.5rem;
        @media (min-width: 576px) {
            font-size: 3.5rem;
        }
    }
    p {
        max-width: 55rem;
        margin: 0 auto 0 auto;
        font-size: 1rem;
        color: #763fd0;
        padding-bottom: 3rem;
        white-space: pre-line;
    }
    @media (min-width: 576px) {
        
    }
    @media (min-width: 768px) {
       
    }
`

// #endregion

export default function Home({ pageData }) {

    function toggleHeroSelectContent(selectElement) {
        const toggleCurrent = selectElement.target.parentElement.parentElement.querySelector('#hero-info-current');
        const heroButtonOne = document.querySelector("#hero-button-1");
        const heroButtonTwo = document.querySelector("#hero-button-2");
        if (toggleCurrent.innerText === "business") {
            selectElement.target.innerText = pageData.acf.hero_section.business_toggle.title;
            toggleCurrent.innerText = pageData.acf.hero_section.home_toggle.title;
            heroButtonOne.innerText = pageData.acf.hero_section.home_toggle.filled_button.text;
            heroButtonOne.href = pageData.acf.hero_section.home_toggle.filled_button.link;
            heroButtonTwo.innerText = pageData.acf.hero_section.home_toggle.outline_button.text;
            heroButtonTwo.href = pageData.acf.hero_section.home_toggle.outline_button.link;
            toggleHeroSelect();
            swapHeroContent();
        } else {
            selectElement.target.innerText = pageData.acf.hero_section.home_toggle.title;
            toggleCurrent.innerText = pageData.acf.hero_section.business_toggle.title;
            heroButtonOne.innerText = pageData.acf.hero_section.business_toggle.filled_button.text;
            heroButtonOne.href = pageData.acf.hero_section.business_toggle.filled_button.link;
            heroButtonTwo.innerText = pageData.acf.hero_section.business_toggle.outline_button.text;
            heroButtonTwo.href = pageData.acf.hero_section.business_toggle.outline_button.link;
            toggleHeroSelect();
            swapHeroContent();
        }
    }

    const ghostPirateCta = pageData.global_sections[4];
    const mapSection = pageData.global_sections[1];
    const testimonialSlider = pageData.global_sections[2];
    const testimonials = pageData.testimonials;
    const preFooterCtas = pageData.global_sections[3];

    return (
        <>
            <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

            </div>
            <HeroWrapper>
                <HeroToggleWrapper>
                    <HeroToggleMainTitle>{pageData.acf.hero_section.title}
                        <HeroToggleSelectWrapper>
                            <ul>
                                <li id="hero-select">
                                    <div className="inside-list-item">
                                        <span id="hero-info-current" className="hero-info-current" onClick={toggleHeroSelect}>{pageData.acf.hero_section.business_toggle.title}</span>
                                        <svg fill="#4B2884" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                        <div id="hero-info-swap-box" className="hero-info-swap-box">
                                            <span id="hero-info-swap" className="hero-info-swap" onClick={toggleHeroSelectContent}>{pageData.acf.hero_section.home_toggle.title}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </HeroToggleSelectWrapper>
                    </HeroToggleMainTitle>
                    <HeroContentWrapper>
                        <ul id="hero-list">
                            {pageData.acf.hero_section.business_toggle.list_item.map((item) => {
                                return (
                                    <li id="hero-list-item-biz">
                                        <img src="https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/item-check_tx3las.svg" />
                                        <p>{item.item}</p>
                                    </li>
                                );
                            })}
                            {pageData.acf.hero_section.home_toggle.list_item.map((item) => {
                                return (
                                    <li id="hero-list-item-home" className="hide">
                                        <img src="https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/item-check_tx3las.svg" />
                                        <p>{item.item}</p>
                                    </li>
                                );
                            })}
                        </ul>
                        <p id="hero-content-biz" className="hero-paragraph">{pageData.acf.hero_section.business_toggle.paragraph}</p>
                        <p id="hero-content-home" className="hide hero-paragraph">{pageData.acf.hero_section.home_toggle.paragraph}</p>
                        <a href="/commercial/" id="hero-button-1" class='filled-button'>
                            Find out more
                        </a>
                        <a href="/contact/" id="hero-button-2" class='outline-button'>
                            Contact Us
                        </a>
                    </HeroContentWrapper>
                </HeroToggleWrapper>
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

            <motion.div 
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5
                }}
            >

                <GhostPirateCta ghostPirateCta={ghostPirateCta}></GhostPirateCta>

            </motion.div>

            <AirQuality>
                <AirQualityTitle>
                    <h2>{pageData.acf.air_quality_section.title}</h2>
                </AirQualityTitle>
                <AirQualityContentWrapper>
                    {pageData.acf.air_quality_section.content_box.map((item) => {
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
                                        <a href={item.filled_button.link} className="filled-button">
                                            {item.filled_button.text}
                                        </a>
                                        <a href={item.outline_button.link} className="outline-button">
                                            {item.outline_button.text}
                                        </a>
                                    </div>
                                </div>
                            </ContentBox>
                        );
                    })}
                </AirQualityContentWrapper>
            </AirQuality>
            <div className="image-content-section-wrapper">
                <div className="image-content-combo-wrapper">
                    <div className="combo-content-side">
                        <h2 className="combo-content-title">{pageData.acf.whatever_it_takes_section.title}</h2>
                        <p className="combo-content-paragraph">{pageData.acf.whatever_it_takes_section.paragraph}</p>
                    </div>
                    <div className="combo-image-side">
                        <div className="combo-image-box" style={{ backgroundImage:`url(${pageData.acf.whatever_it_takes_section.image.url})` }}>
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
                        </div>
                    </div>
                </div>
            </div>

            <MapSection mapSection={mapSection}></MapSection>

            <TestimonialSlider testimonialSlider={testimonialSlider} testimonials={testimonials}></TestimonialSlider>

            <CommitmentSection>
                <h2>{pageData.acf.commitments_section.title}</h2>
                <p>{pageData.acf.commitments_section.paragraph}</p>
                <div className="icon-box">
                    {pageData.acf.commitments_section.icon_box.map((item, index) => {
                        return (
                            <motion.div 
                            initial={{ x: -25 }}
                            whileInView={{ x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.5,
                                duration: 0.5,
                                once: true
                            }}
                            >
                                <div className="icon-title">
                                    <img src={item.icon.url} />
                                    <h4>{item.title}</h4>
                                </div>
                                <p>{item.paragraph}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </CommitmentSection>

            <PreFooterCtas preFooterCtas={preFooterCtas}></PreFooterCtas>
        </>
    );
}