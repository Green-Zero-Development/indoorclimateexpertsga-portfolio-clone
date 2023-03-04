import { apiUrl } from '../../../global-settings.js';
import { notFound } from 'next/navigation';
import OnLoadScripts from "../../../components/OnLoadScripts.js";
import ThankYou from "../../../templates/ThankYou.js";
import Commercial from "../../../templates/Commercial.js";
import Residential from "../../../templates/Residential.js";
import About from "../../../templates/About.js";
import Testimonials from "../../../templates/Testimonials.js";
import Financing from "../../../templates/Financing.js";
import Careers from "../../../templates/Careers.js";
import BlogListing from "../../../templates/BlogListing.js";
import DefaultInfoPage from "../../../templates/DefaultInfoPage.js";
import Contact from "../../../templates/Contact.js";
import ScheduleAppointment from "../../../templates/ScheduleAppointment.js";
import PayOnline from "../../../templates/PayOnline.js";

async function getAllPages() {
  const res = await fetch(apiUrl + `/pages/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

async function getSinglePage(slug) {
  const res = await fetch(apiUrl + `/pages/all/${slug}`)
  if (!res.ok) {
    return notFound();
  } 
  else if (slug == "home" || slug == "404-2" || res == "404") {
    return notFound();
  } else {
    return res.json();
  }
}

export default async function Page({ params: { slug } }) {
  const _page = getSinglePage(slug);
  const page = await _page;

  if (!page.slug) return notFound();

  if (page.template == "templates/thank-you.php" || page.template == "templates/thank-you-appointment.php") {
    return (
      <>
        <ThankYou pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/thank-you-appointment.php") {
    return (
      <>
        <ThankYou pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/commercial.php") {
    return (
      <>
        <Commercial pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/residential.php") {
    return (
      <>
        <Residential pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/about-us.php") {
    return (
      <>
        <About pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/testimonials.php") {
    return (
      <>
        <Testimonials pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/financing.php") {
    return (
      <>
        <Financing pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/careers.php") {
    return (
      <>
        <Careers pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/blog-listing.php") {
    return (
      <>
        <BlogListing pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/contact.php") {
    return (
      <>
        <Contact pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/schedule-appointment.php") {
    return (
      <>
        <ScheduleAppointment pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "templates/pay-online.php") {
    return (
      <>
        <PayOnline pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else if (page.template == "default") {
    return (
      <>
        <DefaultInfoPage pageData={page} />
        <OnLoadScripts pageData={page} />
      </>
    );
  } else {
    return (null);
  }
}

export async function generateStaticParams() {
  const _pages = getAllPages();
  const pages = await _pages;
  return pages.map((pageSing) => ({ 
      slug: pageSing.slug 
    }));
}