import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledHeader = styled.div`
	position: relative;
	display: flex;
	top: 80%;
	${(props) => {
		if (props.notMain) {
			return `
			 align-items: center;
			 height: 50px;
		   `;
		}
	}} width: 100%;
	font-size: 20px;
	letter-spacing: 0.005em;
	justify-content: center;

	a {
		font-size: 1rem;
		color: black !important;
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

const Header = ({ notMain }) => (
	<StyledHeader notMain={notMain}>
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
);

export default Header;
