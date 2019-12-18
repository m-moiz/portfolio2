import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
	border: 1px solid grey;
	padding: 1rem;
	align-self: center;
	width: 500px;
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	box-shadow: 1px 1px 3px 1px grey;
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
