import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.div`
	position: relative;
	display: flex;
	font-size: 22px;
	left: 30%;
	letter-spacing: 0.005em;
	justify-content: center;

	a {
		margin-top: .5rem;
		font-size: .75rem;
		color: white !important;
		&:hover {
			color: grey !important;
		}
	}

	@media screen and (max-width: 968px) {
		left: 0;
	}
`;

const Wrapper = styled.div`
	margin-left: 3rem;
	margin-right: 3rem;
`;

const Polygon = styled.div`
	z-index: 100;
	position: absolute;
	width: 100%;
	height: 40px;
	background: black;
`;

const Header = () => (
	<Polygon>
		<StyledHeader>
			<div>
				<Link to="/" activeStyle={{ borderBottom: '1px solid grey' }}>
					Home
				</Link>
			</div>

			<Wrapper>
				<Link to="/projects" activeStyle={{ borderBottom: '1px solid grey' }}>
					Projects
				</Link>
			</Wrapper>

			<div>
				<Link to="/blog" activeStyle={{ borderBottom: '1px solid grey' }}>
					Blog
				</Link>
			</div>
		</StyledHeader>
	</Polygon>
);

export default Header;
