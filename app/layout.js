import { apiUrl } from './global-settings.js';
import './styles/global.css';
import './styles/header.css';
import './styles/footer.css';
import Script from 'next/script';
import SplashScreen from './components/SplashScreen.js';
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import TopBar from './components/TopBar.js';
import StyledComponentsRegistry from '../lib/registry';

async function getSiteData() {
  const res = await fetch(apiUrl + `/site-data/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getGlobalSections() {
  const res = await fetch(apiUrl + `/global-sections/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getMenu() {
  const res = await fetch(apiUrl + `/menus/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

export default async function RootLayout({ children, page }) {
  const _siteData = getSiteData();
  const siteData = await _siteData;

  const logos = [];
  const socialMedia = [];
  const physicalAddresses = [];
  const phoneNumbers = [];
  const emails = [];
  const footerLogos = [];

  {siteData.map((item) => {
      if (item.title === "Logos") {
          logos.push(
              {"acf": item.acf },
          )
      } else if (item.title === "Social Media Links") {
          socialMedia.push(
              {"acf": item.acf },
          )
      } else if (item.title === "Physical Addresses") {
        physicalAddresses.push(
          {"values": item.acf.value_list},
        ) 
      } else if (item.title === "Contact Numbers") {
        phoneNumbers.push(
          {"values": item.acf.value_list},
        ) 
      } else if (item.title === "Emails") {
        emails.push(
          {"values": item.acf.value_list},
        ) 
      } else if (item.title === "Footer Logos") {
        footerLogos.push(
          {"values": item.acf.footer_logos},
        )
      }else {};
  })}

  const _globalSections = getGlobalSections();
  const globalSections = await _globalSections;

  const topBar = [];

  {globalSections.map((item) => {
      if (item.title === "Topbar") {
        topBar.push(
          {"acf": item.acf},
      )
      } else {};
  })}

  const _menu = getMenu();
  const menu = await _menu;

  const mainMenu = [];
  const mobileMenu = [];
  const footerMenu = [];

  {Object.keys(menu).map((key) => {
      if (menu[key].menu == "main-menu") {
          mainMenu.push(
              {"id": menu[key].id, "parent_id": menu[key].parent_id, "title": menu[key].title, "url": menu[key].url, "children": menu[key].children},
          )
      }
  })}

  {Object.keys(menu).map((key) => {
    if (menu[key].menu == "mobile-menu") {
        mobileMenu.push(
            {"id": menu[key].id, "parent_id": menu[key].parent_id, "title": menu[key].title, "url": menu[key].url, "children": menu[key].children},
        )
    }
  })}

  {Object.keys(menu).map((key) => {
    if (menu[key].menu == "footer-menu") {
      footerMenu.push(
            {"id": menu[key].id, "parent_id": menu[key].parent_id, "title": menu[key].title, "url": menu[key].url, "children": menu[key].children},
        )
    }
  })}

  return (
    <html>
      <head>
      <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {page}
        <link rel="apple-touch-icon" sizes="76x76" href="/favi/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favi/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favi/favicon-16x16.png" />
        <link rel="manifest" href="/favi/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="stylesheet" href="https://use.typekit.net/qyb8xsq.css" />
        <link href="//cloud.typenetwork.com/projects/6786/fontface.css/" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.7/dist/css/splide.min.css"></link>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MJ3GW4CSNB"></script>
      </head>
      <StyledComponentsRegistry>
        <body>
          <TopBar topBar={topBar}></TopBar>
          <Header logos={logos} socialMedia={socialMedia} mainMenu={mainMenu} mobileMenu={mobileMenu} />
          {children}
          <Footer logos={logos} physicalAddresses={physicalAddresses} phoneNumbers={phoneNumbers} socialMedia={socialMedia} footerLogos={footerLogos} footerMenu={footerMenu} />
        </body>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-MJ3GW4CSNB');
          `}
        </Script>
      </StyledComponentsRegistry>
    </html>
  )
}