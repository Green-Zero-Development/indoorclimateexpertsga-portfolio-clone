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

const Hero = styled.div`
    max-width: 50rem;
    margin: 0 auto;
    padding: 200px 16px 500px 16px;
    text-align: center;
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

export default function ThankYou({ pageData }) {

    let buttonLink = getButtonLink(pageData.acf.hero_section.button.link_to_where, pageData.acf.hero_section.button.onsite_link, pageData.acf.hero_section.button.offsite_link, pageData.acf.hero_section.button.file_link);
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
        <Hero>
            <h1>{pageData.acf.hero_section.title}</h1>
            <p>{pageData.acf.hero_section.description}</p>
            <a href={buttonLink} className="filled-button">
                {pageData.acf.hero_section.button.text}
            </a>
        </Hero>
        </>
    )
}