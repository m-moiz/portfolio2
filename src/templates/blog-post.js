import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	display: flex;
	justify-content: center;
`;

const Wrapper = styled.article`
	margin-left: auto;
	margin-right: auto;
	margin-top: 5rem;
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
	@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap");
	font-family: 'Varela Round', sans-serif;

	h2 {
		color: #1a1a1a;
	}

	h3 {
		color: #1a1a1a;
	}

	a {
		color: #ff00ff;

		&:hover {
			text-decoration: underline;
		}
	}

	p {
		font-size: 14px;
		color: hsl(0, 0%, 35%);
		word-spacing: .6px;
		line-height: 1.65;
		margin-top: 1.4rem;
		margin-bottom: 1.4rem;
	}

	ul {
		color: hsl(0, 0%, 35%);
		font-size: 14px;
	}

	ol {
		color: hsl(0, 0%, 35%);
		font-size: 14px;
	}

	pre {
		font-size: 14px;
		background: #2d2d2d;
		margin-top: 2rem;
		margin-bottom: 2rem;
		border-radius: 1rem;
		box-shadow: 0px 0px 1px 3px #3c3c3c;
		padding: 1.5rem;

		code {
			background: none;
		}
	}

	blockquote {
		position: relative;
		overflow: hidden;
		margin: 2rem 0;
		padding: 1em 1.2em;
		font-size: 14px;
		border-left: 4px solid #12ff90;
		background: #fffefe;
		box-shadow: 0px 0px 1px 2px #d7d6d6;
	}

	code {
		padding: 0 .3em;
		line-height: 1.5em;
		background: #f1f2f3;
		border-radius: 5px;
	}

	@media screen and (min-width: 900px) {
		p {
			font-size: 18px;
		}

		blockquote {
			font-size: 18px;
		}

		pre {
			font-size: 18px;
		}

		ol {
			font-size: 18px;
		}

		ul {
			font-size: 18px;
		}
	}
`;

const Template = ({ data }) => {
	const post = data.markdownRemark;

	return (
		<Layout>
			<Header />
			<Container>
				<Wrapper>
					<StyledH1>{post.frontmatter.title}</StyledH1>
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
