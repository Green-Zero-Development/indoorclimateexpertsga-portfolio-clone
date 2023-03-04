'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
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

const Hero = styled.div`
    max-width: 50rem;
    margin: 0 auto;
    padding: 100px 16px 100px 16px;
    text-align: center;
    @media (min-width: 768px) {
        padding: 100px 16px 0px 16px;
    }
    h1 {
        font-size: 3rem;
        color: #482188;
        padding-bottom: 1rem;
        @media (min-width: 576px) {
            font-size: 4rem;
        }
        @media (min-width: 768px) {
            font-size: 4.5rem;
        }
    }
    p {
        font-size: .875rem;
        color: #763fd0;
        padding-bottom: 2.5rem;
        @media (min-width: 576px) {
            font-size: 1rem;
        }
    }
`

const Padding = styled.div`
   padding: 100px 0 0 0;
`

// #endregion

export default function Financing({ pageData }) {

    const testimonialSlider = pageData.global_sections[2];
    const testimonials = pageData.testimonials;
    const preFooterCtas = pageData.global_sections[3];
    
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
            <Hero>
                <h1>{pageData.acf.hero_section.title}</h1>
                <p>{pageData.acf.hero_section.paragraph}</p>
            </Hero>

            {pageData.acf.content_boxes.content_box.map((item, index) => {
                let heroLink = getButtonLink(item.button.link_to_where, item.button.onsite_link, item.button.offsite_link, item.button.file_link);
                if (index % 2) {
                    return (
                        <div className="image-content-section-wrapper">
                            <div className="image-content-combo-wrapper">
                                <div className="combo-content-side">
                                    <h2 className="combo-content-title">{item.title}</h2>
                                    <p className="combo-content-paragraph">{item.paragraph}</p>
                                    {item.list_item 
                                    ?
                                    <ul className="combo-content-ul">
                                    {item.list_item.map((item, index) => {
                                        return (
                                            <li className="combo-content-li">
                                                {item.list_item}
                                            </li>
                                        );
                                    })}
                                    </ul>
                                    : ''}
                                    <a href={heroLink} className="filled-button">
                                        {item.button.text}
                                    </a>
                                </div>
                                <div className="combo-image-side">
                                    <div className="combo-image-box" style={{ backgroundImage:`url(${item.image.url})` }}>
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
                    );
                } else {
                    return (
                        <div className="alt-image-content-combo-wrapper">
                            <div className="combo-image-side">
                                <div className="combo-image-box" style={{ backgroundImage:`url(${item.image.url})` }}>
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
                            <div className="combo-content-side">
                                <h2 className="combo-content-title">{item.title}</h2>
                                <p className="combo-content-paragraph">{item.paragraph}</p>
                                {item.list_item 
                                ?
                                <ul className="combo-content-ul">
                                {item.list_item.map((item, index) => {
                                    return (
                                        <li className="combo-content-li">
                                            {item.list_item}
                                        </li>
                                    );
                                })}
                                </ul>
                                : ''}
                                <a href={heroLink} className="filled-button">
                                    {item.button.text}
                                </a>
                            </div>
                        </div>
                    );
                }
            })}

            <Padding></Padding>

            <TestimonialSlider testimonialSlider={testimonialSlider} testimonials={testimonials}></TestimonialSlider>
            <PreFooterCtas preFooterCtas={preFooterCtas}></PreFooterCtas>
        </>
    )
}