import { apiUrl } from '../global-settings.js';
import { notFound } from 'next/navigation';
import BlogListingLayout from '../components/BlogListingLayout.js';
import PreFooterCtas from '../components/PreFooterCtas.js';

async function getPageData() {
  const res = await fetch(apiUrl + `/pages/all/tips`);
  if (!res.ok) {
    return notFound();
  } else {
    return res.json();
  }
}

async function getAllPosts() {
  const res = await fetch(apiUrl + `/tips/all`)
  if (!res.ok) {
    throw Error(res.statusText);
  } else {
    return res.json();
  }
}

export default async function BlogListing({ pageData }) {
    const _page = getPageData();
    const page = await _page;

    const _posts = getAllPosts();
    const posts = await _posts;

    const preFooterCtas = pageData.global_sections[3];
    
    return (
        <>
            <BlogListingLayout pageData={page} posts={posts}></BlogListingLayout>
            <PreFooterCtas preFooterCtas={preFooterCtas}></PreFooterCtas>
        </>
    )
}