import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
	width: 100%;
	border-bottom: 1px solid black;
	background-color: hsl(0, 0%, 15%);
`;

const MenuHeader = styled.div`
	font-family: 'Nunito', sans-serif;
	display: flex;
	flex-direction: row;
	webkit-justify-content: none !important;
	padding: 2rem;
	height: 4rem;
	margin-bottom: 1rem;

	@media only screen and (min-width: 800px) {
		margin-left: 6rem;
	}
`;

const HeaderLink = styled.li`
	position: relative;
	padding-right: 2rem;
	@media only screen and (min-width: 800px) {
		padding-right: 4rem;
	}
	list-style-type: none;
	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		top: 2rem;
		background-color: rgba(255, 255, 255, 1);
		visibility: hidden;
		-webkit-transform: scaleX(0);
		transform: scaleX(0);
		-webkit-transition: all 0.2s ease-in-out 0s;
		transition: all 0.2s ease-in-out 0s;
	}

	&:hover:before {
		visibility: visible;
		-webkit-transform: scaleX(1);
		transform: scaleX(1);
	}

	a {
		color: white;
	}
`;

const Menu = () => (
	<Wrapper>
		<MenuHeader>
			<HeaderLink>
				<Link activeStyle={{ color: 'blue' }} to="/">
					Home
				</Link>{' '}
			</HeaderLink>

			<HeaderLink>
				<Link activeStyle={{ color: 'blue' }} to="/projects">
					Projects
				</Link>
			</HeaderLink>

			<HeaderLink>
				<Link activeStyle={{ color: 'blue' }} to="/blog">
					Blog
				</Link>
			</HeaderLink>
		</MenuHeader>
	</Wrapper>
);

export default Menu;
