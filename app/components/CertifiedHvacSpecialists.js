'use client';

import Image from 'next/image';
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

const TrustUsSection = styled.div`
    max-width: 72rem;
    margin: 0 auto;
    padding: 150px 32px 0px 32px;
    text-align: center;
    @media (min-width: 576px) {
       
    }
    @media (min-width: 768px) {
        
    }
    h2 {
        font-size: 2.25rem;
        color: #482188;
        text-align: center;
        padding-bottom: 1rem;
        @media (min-width: 576px) {
            font-size: 3.5rem;
        }
    }
    p {
        max-width: 50rem;
        margin: 0 auto;
        font-size: 1rem;
        color: #482188;
        padding-bottom: 2.5rem;
        white-space: pre-line;
    }
    .trust-logos {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 25px 0 0px 0;
    }
    img {
        margin: 0 auto;
        padding: 2rem;
    }
`

// #endregion

export default function CertifiedHvacSpecialists({ certifiedHvacSpecialists }) {

   
    return (
        <>
            <TrustUsSection>
                <h2>{certifiedHvacSpecialists.acf.content.title}</h2>
                <p>{certifiedHvacSpecialists.acf.content.paragraph}</p>
                <div className="trust-logos">
                    {certifiedHvacSpecialists.acf.content.vendor_logos.map((item) => {
                        return (
                            <img src={item.vendor_logo.url} />
                        );
                    })}
                </div>
            </TrustUsSection>
        </>
    )
}