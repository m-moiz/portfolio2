import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	border-radius: 6rem;
	background-color: black;
	color: white;
`;

const Button = (handleClick, children) => (
	<Wrapper>
		<button onClick={handleClick}>{children}</button>
	</Wrapper>
);

export default Button;
