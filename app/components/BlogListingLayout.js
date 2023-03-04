'use client';

import { motion } from "framer-motion";
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

const HeroWrapper = styled.div`
    grid-template-columns: repeat(12, 1fr);
    column-gap: 4rem;
    align-items: start;
    max-width: 76rem;
    margin: 0 auto;
    padding: 3rem 16px 6rem 16px;
    overflow: hidden;
    @media (min-width: 576px) {
        padding-top: 6rem;
    }
    @media (min-width: 768px) {
        display: grid;
    }
`

const HeroContent = styled.div`
    grid-row: 1;
    grid-column: 1 / 8;
    color: #4b2884;
    z-index: 2;
    @media (min-width: 1200px) {
        grid-column: 1 / 6;
    }
    h1 {
        font-size: 3rem;
        padding-bottom: 2rem;
        @media (min-width: 576px) {
            font-size: 4rem;
        }
        @media (min-width: 768px) {
            font-size: 4.5rem;
        }
        @media (min-width: 992px) {
            font-size: 5.5rem;
        }
    }
    p {
        font-weight: 700 !important;
        padding-bottom: 3rem;
    }
`

const HeroImageBox = styled.div`
    display: none;
    position: relative;
    grid-row: 1;
    grid-column: 6 / 14;
    @media (min-width: 768px) {
        display: block;
    }
`

const HeroImage = styled.div`
    padding-top: 14rem;
    padding-bottom: 14rem;
    background-size: cover;
    background-position: center;
`

const BlogListingWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 2rem;
    max-width: 88rem;
    margin: 0 auto;
    padding: 50px 16px 100px 16px;
    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }
`

const BlogListingSingle = styled.a`
    border: 1px solid #e2e8f0;
    margin-bottom: 2rem;
    .content-box {
        padding: 2rem 1rem 2rem 1rem;
        @media (min-width: 1200px) {
            padding: 2rem 2rem 2rem 2rem;
        }
    }
    .tag-list {
        display: flex;
        flex-wrap: wrap;
        > * {
            &:last-child {
                .tag-sep {
                    display: none;
                }
            }
        }
    }
    h6 {
        font-family: 'synthese', sans-serif;
        font-size: 0.75rem;
        font-weight: 700;
        color: #482188;
        text-transform: uppercase;
    }
    .tag-sep {
        padding: 0 0.5rem 0 0;
    }
    h3 {
        font-size: 2.25rem;
        color: #482188;
        padding: 0.5rem 0 1rem 0;
    }
    date {
        font-family: 'synthese', sans-serif;
        font-size: .875rem;
        color: #482188;
    }
`

// #endregion

export default function BlogSingleLayout({ pageData, posts }) {

    return (
        <>
        <div dangerouslySetInnerHTML={{__html: pageData.yoast_head[0]}}>

        </div>
            <HeroWrapper>
                <HeroContent>
                    <h1>{pageData.acf.hero_section.title}</h1>
                    <p>{pageData.acf.hero_section.paragraph}</p>
                </HeroContent>
                <HeroImageBox>
                    <HeroImage style={{ backgroundImage:`linear-gradient(270deg,rgba(255,255,255,0),rgba(255,255,255,1)),url(${pageData.acf.hero_section.image.url})` }}>
                        <motion.div 
                            initial={{ x: -24, y: 25 }}
                            whileInView={{ x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5
                            }}
                            className="red-box"
                            />
                            <motion.div 
                            initial={{ x: 24, y: -25 }}
                            whileInView={{ x: 0, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5
                            }}
                            className="blue-box"
                        />
                    </HeroImage>
                </HeroImageBox>
            </HeroWrapper>
            <BlogListingWrapper>
                {posts.map((item, index) => {
                    return (
                        <>
                        <BlogListingSingle href={`/tips/${item.slug}`} key={index} className="">
                            <img src={item.acf.featured_image.url} />
                            <div className="content-box">
                                <div className="tag-list">
                                    {item.tags.map((item, index) => {
                                        return (
                                            <>
                                            <h6>{item}<span className="tag-sep">,</span></h6>
                                            </>
                                        );
                                    })}
                                </div>
                                <h3>{item.title}</h3>
                                <date>{item.published}</date>
                            </div>
                        </BlogListingSingle>
                        </>
                    );
                })}
            </BlogListingWrapper>
        </>
    )
}