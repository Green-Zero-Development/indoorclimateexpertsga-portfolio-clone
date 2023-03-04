'use client';

import styled from 'styled-components';
// #region Styles

const Section = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #5e2bb1;
    color: #ffffff;
    padding: 15px 0 10px 0;
    transition: 0.25s;
    h6 {
        font-family: 'Rhode Med Cond', sans-serif;
        line-height: 1;
        padding-right: 10px;
    }
    .button {
        font-family: 'Rhode Med Cond', sans-serif;
        line-height: 1;
        font-size: 12px;
        background-color: #ffffff;
        color: #5e2bb1;
        padding: 11px 20px 7px 20px;
        margin-top: -4px;
    }
`

// #endregion

export default function TopBar({ topBar }) {
    return (
        <Section id="topbar" href={topBar[0].acf.content.topbar_link} className="hide-topbar">
            <h6>{topBar[0].acf.content.title}</h6>
            <div className="button">
                {topBar[0].acf.content.button_text}
            </div>
        </Section>
    )
}