import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
	padding: 1rem;
	align-self: center;
	width: 500px;
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	box-shadow: 1px 1px 4px 2px #b5b5b5c7;

	@media screen and (max-width: 500px) {
		width: 90vw;
	}
`;

const BlogPreview = ({ key, title, author, date, path }) => (
	<Wrapper key={key}>
		<h3>{title}</h3>
		<small>
			Posted by {author} on {date}
		</small>

		<Link to={path}>Read More</Link>
	</Wrapper>
);

export default BlogPreview;
