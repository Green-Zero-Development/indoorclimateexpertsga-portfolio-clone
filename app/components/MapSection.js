'use client';

import { motion } from "framer-motion";
import styled from 'styled-components';

// #region Styles

const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 91.66667%;
    max-width: 76rem;
    margin: 0 auto;
    padding-top: 2.5rem;
    padding-bottom: 8rem;
    @media (min-width: 768px) {
        width: 83.33333%;
    }
    .image {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        padding-top: 8rem;
        padding-bottom: 8rem;
        z-index: 20;
        @media (min-width: 576px) {
            width: 50%;
        }
        @media (min-width: 768px) {
            padding-top: 16rem;
            padding-bottom: 19rem;
        }
    }
    .content-wrapper {
        @media (min-width: 576px) {
            width: 50%;
            margin-left: -1.5rem;
        }
    }
    .content-box {
        position: relative;
        background-color: #ffffff;
        border: 1px solid #e2e8f0;
        padding-top: 2.5rem;
        padding-bottom: 2.5rem;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
        z-index: 20;
        @media (min-width: 768px) {
            padding-left: 3rem;
            padding-right: 3rem;
        }
        h2 {
            font-size: 2.25rem;
            color: #482188;
            padding-bottom: 1rem;
            @media (min-width: 768px) {
                font-size: 3.5rem;
            }
        }
        p {
            width: 100%;
            font-size: .875rem;
            color: #482188;
            padding-bottom: 1.5rem;
            @media (min-width: 768px) {
                font-size: 1rem;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            font-family: 'synthese', sans-serif;
            font-size: .75rem;
            color: #482188;
            line-height: 1;
            @media (min-width: 576px) {
                font-size: .875rem;
            }
        }
        li {
            display: flex;
            align-items: center;
            width: 50%;
            padding-bottom: 1rem;
        }
        img {
            padding-right: 0.5rem;
        }
    }
}
`

const BottomBorder = styled.div`
    background-image: url('https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/HVAC_Pattern_elsv73.svg');
    background-size: contain;
    width: 100%;
    height: 16px;
`

// #endregion

export default function MapSection({ mapSection }) {
    
    return (
        <Section>
            <div className="image" style={{ backgroundImage:`url(${mapSection.acf.content.image.url})` }}>

            </div>
            <div className="content-wrapper">
                <motion.div 
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5
                    }}
                    className="content-box"
                >
                    <h2>{mapSection.acf.content.title}</h2>
                    <p>{mapSection.acf.content.paragraph}</p>
                    <ul>
                        {mapSection.acf.content.counties.map((item) => {
                            return (
                                <li>
                                    <img src="https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/item-check-dark_kh97y1.svg" />
                                    {item.county}
                                </li>
                            );
                        })}
                    </ul>
                </motion.div>
                <motion.div 
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        delay: 0.25,
                        duration: 0.5
                    }}
                >
                    <BottomBorder></BottomBorder>
                </motion.div>
            </div>
        </Section>
    )
}