import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${(props) => (props.color ? props.color : 'rgba(68, 255, 146, 0.78)}')};
	height: 100px;
	width: 100vw;
	align-items: center;

	h2 {
		padding-top: 1rem;
		font-size: 2.5rem !important;
	}

	@media only screen and (max-width: 900px) {
		height: 70px;
		h2 {
			font-size: 1.5rem !important;
		}
	}
`;

const SectionTitle = ({ children, color }) => (
	<Wrapper color={color}>
		<Fade>
			<h2>{children}</h2>
		</Fade>
	</Wrapper>
);

export default SectionTitle;
