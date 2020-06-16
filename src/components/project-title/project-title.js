import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	font-family: 'Varela Round', sans-serif;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 60px;
	margin-bottom: 40px;

	h3 {
		font-size: 2rem !important;
		color: white;
	}

	h4 {
		font-size: 1rem !important;
		color: #bdbdbd;
	}

	@media only screen and (max-width: 900px) {
		h3 {
			font-size: 1.5rem !important;
		}

		h4 {
			font-size: .75rem !important;
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
