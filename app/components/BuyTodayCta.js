'use client';

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

const Section = styled.div`
    max-width: 50rem;
    margin: 0 auto 0 auto;
    padding: 40px 16px 150px 16px;
    text-align: center;
    @media (min-width: 1200px) {
        padding: 70px 16px 180px 16px;
    }
    h3 {
        font-size: 2.25rem;
        color: #482188;
        @media (min-width: 576px) {
            font-size: 3.5rem;
        }
    }
    p {
        font-size: .875rem;
        color: #763fd0;
        padding: 15px 0 32px 0;
        @media (min-width: 576px) {
            font-size: 1rem;
        }
    }
`;

// #endregion

export default function BuyTodayCta({ buyTodayCta }) {

    let buttonLink = getButtonLink(buyTodayCta.acf.content.button.link_to_where, buyTodayCta.acf.content.button.onsite_link, buyTodayCta.acf.content.button.offsite_link, buyTodayCta.acf.content.button.file_link);
    
    return (
        <Section>
            <h3>{buyTodayCta.acf.content.title}</h3>
            <p>{buyTodayCta.acf.content.paragraph}</p>
            <a href={buttonLink} className="orange-button">
                {buyTodayCta.acf.content.button.text}
            </a>
        </Section>
    )
}