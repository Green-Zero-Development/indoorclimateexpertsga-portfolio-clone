import { apiUrl } from './global-settings.js';
import FourOFourLayout from './components/FourOFourLayout.js';
import PreFooterCtas from './components/PreFooterCtas.js';

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

export default async function NotFound() {

    async function getPage() {
        const res = await fetch(apiUrl + `/pages/all/404-2`)
        if (!res.ok) {
            throw Error(res.statusText);
        } else {
            return res.json();
        }
    }

    const _page = getPage();
    const page = await _page;

    const preFooterCtas = page.global_sections[3];
   
    return (
        <>
            <FourOFourLayout pageData={page} preFooterCtas={preFooterCtas}></FourOFourLayout>
            <PreFooterCtas preFooterCtas={preFooterCtas}></PreFooterCtas>
        </>
    );
}