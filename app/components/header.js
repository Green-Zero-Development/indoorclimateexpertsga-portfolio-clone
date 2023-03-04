'use client';

import Link from 'next/link';
import styled from 'styled-components';

// #region Functions

function toggleDropdown(dropTrig) {
  dropTrig.target.nextSibling.classList.toggle("desktop-menu-toggle");
}

function toggleMobileDropdown(dropTrig) {
    dropTrig.target.nextSibling.classList.toggle("mobile-menu-toggle");
  }

const mobiletoggle = () => {
  document.getElementById("mobile-menu").classList.toggle("mobile-menu-active");
  document.getElementById("mobile-menu-close").classList.toggle("mobile-menu-x-active");
  document.getElementById("mobile-menu-open").classList.toggle("hidden");
  document.body.classList.toggle("overflow-hidden");
}

// #endregion

// #region Styles

const HeaderStyle = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1440px;
    width: 100%;
    background-color: #ffffff;
    padding: 24px 16px 24px 16px;
    margin: 0 auto;
    z-index: 50;
    transition: .25s;
`;

const DesktopLogoLink = styled.a`
    display: flex;
    align-items: center;
    width: 100%;
    margin: auto;
    @media (min-width: 992px) {
        width: auto;
        margin-left: 0;
        margin-right: 0;
    }
`;

const DesktopLogo = styled.img`
    margin: auto;
    @media (min-width: 576px) {
        max-width: 210px;
    }
    @media (min-width: 992px) {
        max-width: 150px;
    }
    @media (min-width: 1200px) {
        max-width: 210px;
    }
`;

const MobileMenuOpen = styled.div`
    position: fixed;
    bottom: 64px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 999;
    svg {
        background-color: #763fd0;
        padding: 5px;
        margin: auto;
    }
    @media (min-width: 992px) {
        display: none;
    }
`

const MobileMenuClose = styled.div`
    opacity: 0;
    pointer-events: none;
    position: fixed;
    bottom: 64px;
    left: auto;
    right: auto;
    width: 100%;
    z-index: 999;
    svg {
        background-color: #ffffff;
        padding: 5px;
        margin: auto;
    }
`

const DesktopNavi = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    font-family: Rhode Med Cond,sans-serif;
    text-transform: uppercase;
    @media (min-width: 992px) {
        width: 100%;
    }
`

const DesktopMenu = styled.ul`
    display: none;
    width: 100%;
    align-items: baseline;
    @media (min-width: 992px) {
        display: flex;
    }
    > * {
        &:last-child {
            margin-left: auto !important;
           a {
            background-color: #482188;
            color: #ffffff;
            padding: 12px 32px 10px 32px;
            transition: 0.25s;
            &:hover {
                background-color: #32175f;
                color: #ffffff;
                transition: 0.25s;
            }
           }
        }
      }
`

const DesktopMenuSingle = styled.li`
    font-size: 14px;
    a {
        color: #482188;
        transition: 0.25s;
        &:hover {
            color: #763fd0;
            transition: 0.25s;
        }
    }
    @media (min-width: 992px) {
        font-size: 16px;
        margin-left: 24px;
    }
    @media (min-width: 1200px) {
        font-size: 18px;
        margin-left: 32px;
    }
    @media (min-width: 1440px) {
        margin-left: 48px;
    }
`

const DesktopDropdown = styled.div`
    opacity: 0;
    pointer-events: none;
    position: absolute;
    display: flex;
`

const MobileMenu = styled.div`
    position: fixed;
    inset: 0;
    overflow-y: scroll;
    pointer-events: none;
    opacity: 0;
    transform: scale(1.1);
    background-color: #4b2884;
    padding: 24px 0px 0px 0px;
    z-index: 998;
    transition: .25s;
`

const MobileItems = styled.div`
    position: relative;
    padding-bottom: 150px;
    z-index: 998;
`

const MobileMenuHeader = styled.div`
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 6px 6px 6px 6px;
`

const MobileMenuList = styled.ul`
    padding-top: 3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    @media (min-width: 992px) {
        
    }
`

const MobileMenuSingle = styled.li`
    display: flex;
    width: 100%;
    font-family: Rhode Med Cond,sans-serif;
    text-transform: uppercase;
    font-size: 24px;
    color: #ffffff !important;
    padding-bottom: 22px !important;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
    @media (min-width: 576px) {
        font-size: 48px;
    }
    a {
        width: 100%;
    }
`

const MobileMenuSingleDrop = styled.li`
    font-size: 16px;
    padding-bottom: 22px !important;
    margin-bottom: 1.5rem;
    .desktop-trigger {
        display: grid;
    }
    svg {
        pointer-events: none;
        width: 12px;
    }
`

const MobileMenuDropTitle = styled.div`
    pointer-events: none;
`

// #endregion

export default function Header({ logos, mainMenu, mobileMenu }) {

    const mainLogo = logos[0].acf.logo.url;
    const mobileLogo = logos[0].acf.mobile_menu_logo.url;

    return (
        <>
        <HeaderStyle>
            <DesktopLogoLink href="/">
                <DesktopLogo src={mainLogo} />
            </DesktopLogoLink>
        <DesktopNavi>
            <DesktopMenu>
                {mainMenu.map((item) => {
                    if (item.children) {
                        return (
                            <DesktopMenuSingle key={item.id}>
                                <div id="dropdown-trigger" onClick={toggleDropdown} className="">{item.title}</div>
                                <DesktopDropdown id="dropdown">
                                {Object.keys(item.children).map((key, index) => {
                                    if (item.children[key].url.includes("#")) {
                                        return (
                                            <a key={index} href={item.children[key].url}>{item.children[key].title}</a>
                                        );
                                    } else {
                                        return (
                                            <Link key={index} href={item.children[key].url}>{item.children[key].title}</Link>
                                        );
                                    }
                                })}
                                </DesktopDropdown>
                            </DesktopMenuSingle>
                        )
                    } else {
                        if (item.url.includes("#")) {
                            return (
                                <DesktopMenuSingle key={item.id}>
                                    <a href={item.url}>{item.title}</a>
                                </DesktopMenuSingle>
                            )
                        } else {
                            return (
                                <DesktopMenuSingle key={item.id}>
                                    <Link href={item.url}>{item.title}</Link>
                                </DesktopMenuSingle>
                            )
                        }
                    }
                })}
            </DesktopMenu>
        </DesktopNavi>
          <MobileMenu id="mobile-menu">
            <MobileItems id="mobile-items">
                <MobileMenuHeader>
                    <DesktopLogoLink href="/">
                        <DesktopLogo src={mobileLogo} />
                    </DesktopLogoLink>
                </MobileMenuHeader>
                <MobileMenuList className="pt-12 px-6">
                {mobileMenu.map((item) => {
                    if (item.children) {
                        return (
                            <MobileMenuSingleDrop key={item.id}>
                                <div id="dropdown-trigger" className="dropdown-trigger" onClick={toggleMobileDropdown}>
                                    <MobileMenuDropTitle>{item.title}</MobileMenuDropTitle>
                                    <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                                </div>
                                <DesktopDropdown className="dropdown">
                                {Object.keys(item.children).map((key, index) => {
                                    if (item.children[key].url.includes("#")) {
                                        return (
                                            <a key={index} href={item.children[key].url} onClick={mobiletoggle}>{item.children[key].title}</a>
                                        );
                                    } else {
                                        return (
                                            <Link key={index} href={item.children[key].url} onClick={mobiletoggle}>{item.children[key].title}</Link>
                                        );
                                    }
                                })}
                                </DesktopDropdown>
                            </MobileMenuSingleDrop>
                        )
                    } else {
                        if (item.url.includes("#")) {
                            return (
                                <MobileMenuSingle key={item.id}>
                                    <a href={item.url} className="" onClick={mobiletoggle} >{item.title}</a>
                                </MobileMenuSingle>
                            )
                        } else {
                            return (
                                <MobileMenuSingle key={item.id}>
                                    <Link href={item.url} onClick={mobiletoggle}>{item.title}</Link>
                                </MobileMenuSingle>
                            )
                        }
                    }
                })}
                </MobileMenuList>
            </MobileItems>
        </MobileMenu>
        <MobileMenuClose id="mobile-menu-close" onClick={mobiletoggle}>
            <svg width="48" height="48" fill="#763fd0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
        </MobileMenuClose>
        </HeaderStyle>
        <MobileMenuOpen id="mobile-menu-open" onClick={mobiletoggle}>
            <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 448 512"><path d="M0 64H448v64H0V64zM0 224H448v64H0V224zM448 384v64H0V384H448z"/></svg>
        </MobileMenuOpen>
        </>
    );
}