'use client';

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
    padding: 3rem 16px 6rem 16px;
    .meta-box {
      max-width: 105rem;
      margin: 0 auto;
      background-color: #ebe3f8;
      text-align: center;
      padding-bottom: 100px;
      @media (min-width: 576px) {
        padding-bottom: 200px;
      }
      @media (min-width: 768px) {
        padding-bottom: 300px;
      }
      @media (min-width: 992px) {
        padding-bottom: 400px;
      }
      .meta-box-inner {
        max-width: 64rem;
        padding: 100px 16px 0 16px;
        margin: 0 auto;
      }
    }
    .post-title {
      font-size: 1.5rem;
      color: #32175f;
      padding-bottom: 1rem;
      @media (min-width: 576px) {
        font-size: 2.25rem;
      }
      @media (min-width: 768px) {
        font-size: 4rem;
      }
    }
    .author {
      font-family: 'synthese', sans-serif;
      font-size: .875rem;
      font-weight: 700;
      color: #482188;
      text-transform: uppercase;
      padding-bottom: 2rem;
    }
    .feat-img {
      max-width: 64rem;
      width: 90%;
      padding: 100px 0px 100px 0px;
      margin: -100px auto 0px auto;
      background-size: cover;
      background-position: center;
      @media (min-width: 576px) {
        padding: 200px 0px 200px 0px;
        margin: -200px auto 0px auto;
      }
      @media (min-width: 768px) {
        padding: 200px 0px 200px 0px;
        margin: -300px auto 0px auto;
      }
      @media (min-width: 992px) {
        padding: 300px 0px 300px 0px;
        margin: -400px auto 0px auto;
      }
    }
    .might-like-title {
      font-size: 2.25rem;
      color: #32175f;
      text-align: center;
      padding-top: 8rem;
      @media (min-width: 768px) {
        font-size: 4rem;
      }
    }
    .blog-content-box {
      max-width: 64rem;
      padding: 150px 16px 0 16px;
      margin: 0 auto;
      h2 {
          font-family: "synthese" ,sans-serif !important;
          font-size: 32px;
          color: #482188 !important;
          line-height: 1.2;
          padding-bottom: 32px;
      }
      h3 {
          font-family: "synthese" ,sans-serif !important;
          font-size: 24px;
          color: #482188 !important;
          line-height: 1.2;
          padding-bottom: 32px;
      }
      ol {
          list-style-type: decimal;
          padding: 0px 40px 32px 40px;
      }
      ul {
          list-style: disc;
          padding: 0px 40px 32px 40px;
      }
      li {
          font-family: "synthese" ,sans-serif !important;
          font-size: 18px;
          line-height: 1.5;
          color: #482188 !important;
          padding-bottom: 16px;
      }
      p {
          font-family: "synthese" ,sans-serif !important;
          font-size: 18px;
          color: #482188!important;
          white-space: pre-line;
          line-height: 1.5;
          padding-bottom: 32px;
      }
      blockquote p {
          font-family: "Rhode Med Cond" ,sans-serif !important;
          font-size: 32px;
          font-weight: 200;
          line-height: 1.2;
          color: #482188!important;
          white-space: pre-line;
          padding: 0px 40px 32px 40px;
      }
      a {
          font-weight: 200;
          line-height: 1.2;
          color: #482188!important;
          text-decoration: underline;
      }
      img {
          width: auto;
          margin: auto;
      }
    }
`

const BlogListingWrapper = styled.ul`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    column-gap: 2rem;
    max-width: 88rem;
    margin: 0 auto;
    padding: 50px 16px 0px 16px;
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

export default function BlogSingle({ postData }) {

    const preFooterCtas = postData.global_sections[3];
    
    return (
        <>
        <div dangerouslySetInnerHTML={{__html: postData.yoast_head[0]}}>

        </div>
            <Section>
              <div className="meta-box">
                <div className="meta-box-inner">
                  <h1 className="post-title">{postData.title}</h1>
                  <h6 className="author">By {postData.acf.author}</h6>
                </div>
              </div>
              <div className="feat-img" style={{ backgroundImage:`url(${postData.acf.featured_image.url})` }}></div>
              <div className="blog-content-box" dangerouslySetInnerHTML={{__html: postData.acf.content}}>
                
              </div>
              <h2 className="might-like-title">You Might Also Enjoy</h2>
              <BlogListingWrapper>
                {postData.you_might_like.map((item, index) => {
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
            </Section>
            <PreFooterCtas preFooterCtas={preFooterCtas}></PreFooterCtas>
        </>
    )
}