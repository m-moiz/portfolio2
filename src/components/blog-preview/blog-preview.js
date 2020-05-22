import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
	padding: 2rem;
	align-self: center;
	width: 500px;
	display: flex;
	flex-direction: column;
	margin-bottom: 2rem;
	box-shadow: 0px 0px 0px 5px #5eb8ff;
	background: black;

	@media screen and (max-width: 500px) {
		width: 90vw;
	}
`;

const StyledLink = styled(Link)`
font-size: 12px;
margin-top: 1rem;
border: 1px solid #4a4a4a;
width: -moz-fit-content;
width: fit-content;
padding-left: 1rem;
padding-right: 1rem;
padding-top: .2rem;
padding-bottom: .2rem;
background-color: #171717;
color: white;
`;

const StyledImg = styled.img`max-height: 300px;`;

const BlogPreview = ({ key, title, author, imageUrl, date, path }) => (
	<Wrapper key={key}>
		<h3 style={{ color: 'white' }}>{title}</h3>
		<StyledImg src={imageUrl} alt="blog preview" />
		<small style={{ color: 'rgb(123, 255, 194)' }}>{date}</small>

		<StyledLink to={path}>Read More</StyledLink>
	</Wrapper>
);

export default BlogPreview;
