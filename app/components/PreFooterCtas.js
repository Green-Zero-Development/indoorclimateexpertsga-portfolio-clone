'use client';

import styled from 'styled-components';

function getButtonLink(linkToWhere, onSiteLink, offSiteLink, fileLink) {
    switch (linkToWhere) {
      case "A page on this site":
        return (onSiteLink.replace('inside', 'www'));
      case "Another site":
        return (offSiteLink);
      case "A file":
        return (fileLink.url);
      default:
        return ('/');
    }
}

// #region Styles

const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 auto;
    .left-group {
        grid-column: span 12 / span 12;
        background-color: #763fd0;
        padding: 40px 40px 40px 40px;
        @media (min-width: 576px) {
            grid-column: span 6 / span 6;
        }
        @media (min-width: 992px) {
            padding: 40px 80px 40px 80px;
        }
        .left-group-box {
            max-width: 540px;
            margin-left: auto;
        }
        h6 {
            color: #ffffff;
        }
        .outline-button {
            border: 2px solid #ffffff;
            color: #ffffff;
        }
    }
    .right-group {
        grid-column: span 12 / span 12;
        background-color: #ebe3f8;
        padding: 40px 40px 40px 40px;
        @media (min-width: 576px) {
            grid-column: span 6 / span 6;
        }
        @media (min-width: 992px) {
            padding: 40px 80px 40px 80px;
        }
        .right-group-box {
            max-width: 540px;
            margin-right: auto;
        }
        h6 {
            color: #482188;
        }
        .outline-button {
            border: 2px solid #482188;
            color: #482188;
            &:hover {
                color: #ffffff;
            }
        }
    }
    h6 {
        font-family: 'Rhode Med Cond', sans-serif;
        line-height: 1;
        font-size: 2.25rem;
        padding-bottom: 32px;
        @media (min-width: 768px) {
            font-size: 3rem;
        }
    }
`

// #endregion

export default function PreFooterCtas({ preFooterCtas }) {

    const leftButtonLink = getButtonLink(preFooterCtas.acf.content.left_group.button.link_to_where, preFooterCtas.acf.content.left_group.button.onsite_link, preFooterCtas.acf.content.left_group.button.offsite_link, preFooterCtas.acf.content.left_group.button.file_link);

    const rightButtonLink = getButtonLink(preFooterCtas.acf.content.right_group.button.link_to_where, preFooterCtas.acf.content.right_group.button.onsite_link, preFooterCtas.acf.content.right_group.button.offsite_link, preFooterCtas.acf.content.right_group.button.file_link);

    return (
        <Section>
            <div className="left-group">
                <div className="left-group-box">
                    <h6>{preFooterCtas.acf.content.left_group.title}</h6>
                    <a href={leftButtonLink} className="outline-button">
                        {preFooterCtas.acf.content.left_group.button.text}
                    </a>
                </div>
            </div>
            <div className="right-group">
                <div className="right-group-box">
                    <h6>{preFooterCtas.acf.content.right_group.title}</h6>
                    <a href={rightButtonLink} className="outline-button">
                        {preFooterCtas.acf.content.right_group.button.text}
                    </a>
                </div>
            </div>
        </Section>
    )
}