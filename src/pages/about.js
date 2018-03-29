import React from "react";
import Helmet from "react-helmet";

export default function About({ data }) {

    const { markdownRemark: post } = data;

    return (
        <div>
            <Helmet title={`Title ${post.frontmatter.title}`} />
            <div>
                <h1>
                    {post.frontmatter.title}
                </h1>
                <p dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </div>
    )
}

export const aboutQuery = graphql`
    query aboutDataQuery {
        markdownRemark {
            html 
            frontmatter {
                title 
            }
        }
    }
`;



