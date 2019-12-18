import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;

	button {
		border-radius: 6rem;
		background-color: #00a4d6;
		color: white;
		font-size: 1.5rem;
		border: none !important;
		padding: 1rem;
		padding-left: 3rem;
		padding-right: 3rem;
		box-shadow: 1px 1px 4px 1px #c7c7c7;
		transition: color .2s ease-in;
		transition: background-color .2s ease-in;

		&:hover {
			curson: pointer;
			background-color: #eda6ff;
		}

		&:active {
			box-shadow: 1px 1px 2px 2px #c7c7c7;
		}

		&:focus {
			outline: none;
		}
	}

	@media only screen and (max-width: 900px) {
		button {
			font-size: 1.2rem;
		}
	}

	margin-bottom: 2rem;
`;

const Button = ({ handleClick, children }) => (
	<Wrapper>
		<button onClick={handleClick}>{children}</button>
	</Wrapper>
);

export default Button;
