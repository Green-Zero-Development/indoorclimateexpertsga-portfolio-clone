'use client';

import { useEffect } from 'react';
import styled from 'styled-components';
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

const Section = styled.div`
    max-width: 76rem;
    margin: 0 auto;
    padding: 100px 16px 0px 16px;
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
    .contact-form {
        padding-bottom: 100px;
    }
`

// #endregion

export default function Careers({ pageData }) {

    const preFooterCtas = pageData.global_sections[3];

    useEffect(() => {
        const cogForm = document.createElement('script');
        const cogFormBox = document.getElementById('contact-form');
        cogForm.src = "https://www.cognitoforms.com/f/seamless.js";
        cogForm.setAttribute("data-key", "IG83lPQs7UKU2FDeP--HlA");
        cogForm.setAttribute("data-form", "31");
        if (cogFormBox.hasChildNodes() == true) {
    
        } else {
            cogFormBox.appendChild(cogForm);
        }
    }, []);
    
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
            <Section>
                <h1>{pageData.acf.title}</h1>
                <div id="contact-form" className="contact-form">
                      
                </div>
            </Section>
            <PreFooterCtas preFooterCtas={preFooterCtas}></PreFooterCtas>
        </>
    )
}