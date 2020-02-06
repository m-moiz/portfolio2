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

	@media screen and (max-width: 820px) {
		width: 85vw;
	}
`;

const StyledH1 = styled.h1`
	font-size: 2.6rem !important;
	font-weight: 400 !important;

	@media screen and (max-width: 820px) {
		font-size: 1.9rem !important;
	}

	@media screen and (max-width: 400px) {
		font-size: 1.5rem !important;
	}
`;

const Content = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Raleway:500&display=swap");
	font-family: 'Raleway', sans-serif;

	p {
		color: #252525;
		word-spacing: 2px;
		line-height: 1.67;
	}

	pre {
		color: #252525;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	@media screen and (min-width: 900px) {
		p {
			font-size: 18px;
		}

		pre {
			font-size: 18px;
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
