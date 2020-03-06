import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import styled from 'styled-components';
const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.article`
	margin-left: auto;
	margin-right: auto;
	max-width: 52rem;
	padding: 1.625rem 1.21875rem;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 820px) {
		width: 85vw;
	}
`;

const StyledH1 = styled.h1`
	@import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
	font-family: 'Muli', sans-serif;
	font-size: 2.6rem !important;
	letter-spacing: -0.07rem;
	font-weight: 400 !important;
	color: #2d2d2d;

	@media screen and (max-width: 820px) {
		font-size: 1.9rem !important;
	}

	@media screen and (max-width: 400px) {
		font-size: 1.5rem !important;
	}
`;

const Content = styled.section`
	@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");
	font-family: 'Lato', serif;

	a {
		color: #ff00ff;

		&:hover {
			text-decoration: underline;
		}
	}

	p {
		color: hsl(0, 0%, 0%, 0.8);
		word-spacing: 1px;
		letter-spacing: 0.01rem;
		line-height: 1.7;
		margin-bottom: 1.4rem;
	}

	pre {
		background: #2d2d2d;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	@media screen and (min-width: 900px) {
		p {
			font-size: 16.5px;
		}

		pre {
			font-size: 14px;
		}
	}
`;

const Template = ({ data }) => {
	const post = data.markdownRemark;

	return (
		<Layout>
			<Container>
				<Wrapper>
					<Link to="/blog" style={{ marginBottom: '2rem', marginTop: '1rem' }}>
						Go Back
					</Link>
					<StyledH1>{post.frontmatter.title}</StyledH1>
					<h4>{post.frontmatter.author}</h4>
					<h4>{post.frontmatter.date}</h4>
					<hr />
					<Content dangerouslySetInnerHTML={{ __html: post.html }} />
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
