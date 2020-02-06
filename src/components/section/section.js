import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Section = ({ children, background, marginTop, height, display, flexDirection, justifyContent, id }) => (
	<Wrapper
		id={id}
		style={{
			background: background,
			marginTop: marginTop,
			height: height,
			display: display,
			flexDirection: flexDirection,
			justifyContent: justifyContent
		}}
	>
		{children}
	</Wrapper>
);

export default Section;
