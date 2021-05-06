import * as React from "react";
import { Link, graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";

const BlogLink = styled(Link)`
    text-decoration: none;
`;

const BlogTitle = styled.h3`
    margin-bottom: 20px;
    color: blue;
`;

const BlogBody = styled.div`
    margin-bottom: 50px;
`;

const IndexPage = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <div>
                <h4>{data.allMarkdownRemark.totalCount} posts</h4>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <BlogBody key={node.id}>
                        <BlogLink to={node.fields.slug}>
                            <BlogTitle>
                                {node.frontmatter.title} -{" "}
                                {node.frontmatter.date}{" "}
                            </BlogTitle>
                        </BlogLink>
                        <p> {node.excerpt} </p>
                    </BlogBody>
                ))}
            </div>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query {
        allMarkdownRemark {
            totalCount
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        date
                        description
                        title
                    }
                    fields {
                        slug
                    }
                    html
                }
            }
        }
    }
`;
