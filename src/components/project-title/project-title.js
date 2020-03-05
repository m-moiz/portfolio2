import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h3 {
		margin-top: 40px;
		font-size: 2.2rem !important;
		color: #1b1b1b;
	}

	h4 {
		font-size: 1.3rem !important;
		color: #4a4a4a;
	}

	@media only screen and (max-width: 900px) {
		h3 {
			font-size: 2rem !important;
		}

		h4 {
			font-size: 1rem !important;
		}
	}
`;

const ProjectTitle = ({ title, desc }) => (
	<Wrapper>
		<Fade>
			<h3>{title}</h3>
			<h4>{desc}</h4>
		</Fade>
	</Wrapper>
);

export default ProjectTitle;
