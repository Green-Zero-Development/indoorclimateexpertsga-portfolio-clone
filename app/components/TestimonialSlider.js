'use client';

import styled from 'styled-components';
import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';

// #region Styles

const Section = styled.div`
    background-color: #ebe3f8;
    text-align: center;
    padding: 100px 16px 70px 16px;
    .slide-wrapper {
        max-width: 40rem;
        margin: 0 auto;
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
        font-size: 1rem;
        color: #482188;
        padding-bottom: 3rem;
        white-space: pre-line;
        @media (min-width: 576px) {
            font-size: 1.25rem;
        }
    }
    h5 {
        font-size: 1.25rem;
        color: #482188;
        padding-bottom: 0.5rem;
    }
    h6 {
        font-family: Rhode Med Cond, sans-serif;
        color: #482188;
        padding-bottom: 6rem;
    }
    .splide__pagination__page {
        width: 10px;
        height: 10px;
    }
    .splide__pagination__page.is-active {
        background: #333333 !important;
    }
`
// #endregion

export default function TestimonialSlider({ testimonialSlider, testimonials }) {
    
    return (
        <Section>
            <div className="slide-wrapper">
                <h2>{testimonialSlider.acf.title}</h2>
                <Splide hasTrack={ false }
                    options={ {
                        type: 'slide',
                        perMove: 1,
                        rewind: true,
                        arrows: false,
                        pagination: true,
                        keyboard: 'global',
                    } 
                    }
                    >
                    <SplideTrack className="pt-4">
                        {testimonials.map((item, index) => {
                            return (
                            <SplideSlide key={index} className="splide__slide">
                                <p>"{item.acf.full_text}"</p>
                                <h5>{item.acf.person}</h5>
                                <h6>{item.acf.type_of_review}</h6>
                            </SplideSlide>
                            );
                        })}
                        
                    </SplideTrack>
                </Splide>
            </div>
        </Section>
    )
}