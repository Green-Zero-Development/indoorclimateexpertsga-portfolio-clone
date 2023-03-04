'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';
import PreFooterCtas from '../components/PreFooterCtas.js';

// #region Styles

const Section = styled.div`
    max-width: 76rem;
    margin: 0 auto;
    padding: 100px 16px 100px 16px;
    @media (min-width: 768px) {
        
    }
    h1 {
        font-size: 2.25rem;
        color: #482188;
        text-align: center;
        padding-bottom: 100px;
        @media (min-width: 576px) {
            font-size: 4rem;
        }
    }
    .testimonial-section {
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
        @media (min-width: 768px) {
            display: grid;
        }
    }
    .testimonial-single {
        position: relative;
        background-color: #ebe3f8;
        margin-bottom: 6rem;
        padding: 3rem 2rem 3rem 2rem;
        h2 {
            font-size: 2.25rem;
            color: #482188;
            padding-bottom: 1.25rem;
        }
        p {
            font-size: .875rem;
            color: #482188;
            padding-bottom: 1.25rem;
            @media (min-width: 576px) {
                font-size: 1rem;
            }
        }
        h5 {
            font-size: 1.25rem;
            color: #482188;
            padding-bottom: 0.5rem;
            font-weight: 700;
        }
         h6 {
            font-family: Rhode Med Cond, sans-serif;
            text-transform: uppercase;
            color: #482188;
            padding-bottom: 2rem;
         }
    }
`

const BottomBorder = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-image: url('https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/HVAC_Pattern_elsv73.svg');
    background-size: contain;
    width: 90%;
    height: 22px;
    margin-bottom: -22px;
`

// #endregion

export default function Testimonials({ pageData }) {

    const testimonials = pageData.testimonials;
    const preFooterCtas = pageData.global_sections[3];
    
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
            <Section>
                <h1>{pageData.acf.title}</h1>
                <div className="testimonial-section">
                {testimonials.map((item, index) => {
                    let delayVal = index % 2;
                    if (delayVal === 1) {
                        delayVal = 0.5;
                    } else {
                        delayVal = 0.25;
                    }
                    return (
                        <motion.div 
                            initial={{ y: 25 }}
                            whileInView={{ y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: delayVal,
                                duration: 0.5,
                                once: true
                            }}
                            >
                            <div key={index} className="testimonial-single">
                                <h2>"{item.acf.highlight}"</h2>
                                <p>"{item.acf.full_text}"</p>
                                <h5>{item.acf.person}</h5>
                                <h6>{item.acf.type_of_review}</h6>
                                <BottomBorder></BottomBorder>
                            </div>
                        </motion.div>
                    );
                })}
                </div>
            </Section>
            <PreFooterCtas preFooterCtas={preFooterCtas}></PreFooterCtas>
        </>
    )
}