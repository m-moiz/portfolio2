import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import styled from 'styled-components';
const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.div`
	width: 768px;
	display: flex;
	flex-direction: column;
`;

const StyledH1 = styled.h1`
	font-size: 2.6rem !important;
	font-weight: 400 !important;
`;

const Template = ({ data }) => {
	const post = data.markdownRemark;

	return (
		<Layout>
			<Container>
				<Wrapper>
					<Link to="/blog">Go Back</Link>
					<StyledH1>{post.frontmatter.title}</StyledH1>
					<h4>{post.frontmatter.author}</h4>
					<h4>{post.frontmatter.date}</h4>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
				</Wrapper>
			</Container>
		</Layout>
	);
};

export const postQuery = graphql`
	query BlogPostByPath($path: String) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
				author
				date
			}
		}
	}
`;

export default Template;
