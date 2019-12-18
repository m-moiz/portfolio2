import React from 'react';
import { graphql } from 'gatsby';
import BlogPreview from '../components/blog-preview/blog-preview';
import Layout from '../components/layout/layout';
import styled from 'styled-components';

const Container = styled.div`
	margin-top: 1rem;
	display: flex;
	width: 100vw;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 768px;
	display: flex;
	flex-direction: column;
`;

const StyledH1 = styled.h1`
	align-self: center;
	margin-bottom: 3rem;
`;

const BlogPage = ({ data }) => (
	<Layout>
		<Container>
			<Wrapper>
				<StyledH1>Latest Posts</StyledH1>
				{data.allMarkdownRemark.edges.map((post) => (
					<BlogPreview
						key={post.node.id}
						title={post.node.frontmatter.title}
						author={post.node.frontmatter.author}
						date={post.node.frontmatter.date}
						path={post.node.frontmatter.path}
					/>
				))}
			</Wrapper>
		</Container>
	</Layout>
);

export const pageQuery = graphql`
	query BlogIndexQuery {
		allMarkdownRemark {
			edges {
				node {
					id
					frontmatter {
						path
						title
						date
						author
					}
				}
			}
		}
	}
`;

export default BlogPage;
