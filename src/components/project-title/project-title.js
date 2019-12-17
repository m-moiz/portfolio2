import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	h3 {
		margin-top: 40px;
		font-size: 3rem !important;
	}

	h4 {
		font-size: 2rem !important;
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
		<h3>{title}</h3>
		<h4>{desc}</h4>
	</Wrapper>
);

export default ProjectTitle;