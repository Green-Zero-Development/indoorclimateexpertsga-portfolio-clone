'use client';

import styled from 'styled-components';

// #region Styles

const Section = styled.div`
    display: flex;
    max-width: 24rem;
    margin: 0 auto 0 auto;
    @media (min-width: 768px) {
        max-width: 56rem;
    }
    .ghost-border {
        height: 150px;
        margin-top: -0.5rem;
        margin-right: -0.75rem;
        z-index: 20;
    }
    .ghost-pirate-section {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        background-color: rgba(235,227,248,.5);
        padding: 1.5rem;
        margin-bottom: 8rem;
    }
    .image-box {
        width: 100%;
        padding-bottom: 1rem;
        @media (min-width: 768px) {
            width: 16.6666666667%;
            padding-bottom: 0;
        }
    }
    .ghost-logo {
        margin: 0 auto;
        @media (min-width: 768px) {
            margin-right: 0;
        }
    }
    .content-box {
        width: 100%;
        text-align: center;
        @media (min-width: 768px) {
            width: 83.3333333333%;
        }
    }
    h4 {
        font-size: 3rem!important;
        @media (min-width: 768px) {
            font-size: 2.25rem !important;
        }
        @media (min-width: 992px) {
            font-size: 3rem !important;
        }
    }
    p {
        font-size: 1.25rem;
        color: #482188;
        @media (min-width: 768px) {
            font-size: 1.125rem !important;
        }
        @media (min-width: 992px) {
            font-size: 1.25rem !important;
        }
    }
    .ghost-border-bottom {
        height: 150px;
        margin-top: -0.5rem;
        margin-left: -0.75rem;
        z-index: 20;
    }
`;

// #endregion

export default function GhostPirateCta({ ghostPirateCta }) {
    
    return (
        <Section>
            <img className="ghost-border" src="https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/ghost-border_esvrwn.png" />
            <div className="ghost-pirate-section">
                <div className="image-box">
                    <img className="ghost-logo" src={ghostPirateCta.acf.content.logo.url} />
                </div>
                <div className="content-box">
                    <h4>{ghostPirateCta.acf.content.title}</h4>
                    <p>{ghostPirateCta.acf.content.subtitle}</p>
                </div>
            </div>
            <img className="ghost-border-bottom" src="https://inside.indoorclimateexpertsga.com/wp-content/uploads/2023/02/ghost-border_esvrwn.png" />
        </Section>
    )
}