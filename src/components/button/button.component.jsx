import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;

	button {
		border-radius: 3rem;
		background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : '#00a4d6')};
		letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : '')};
		top: ${(props) => (props.top ? props.top : '')};
		color: white;
		font-size: ${(props) => (props.size === 'small' ? '1.2rem' : '1.2rem')};
		border: none !important;
		line-height: 0;
		padding-top: ${(props) => (props.size === 'small' ? '1.7rem' : '2rem')};
		padding-bottom: ${(props) => (props.size === 'small' ? '1.7rem' : '2rem')};
		padding-left: 3rem;
		padding-right: 3rem;
		transition: color .2s ease-in;
		transition: background-color .2s ease-in;
		position: relative;

		&:hover {
			cursor: pointer;
			background-color: #00c539;
		}

		&:active {
		}

		&:focus {
			outline: none;
		}
	}

	a {
		background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : ' #000000')};
		letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : '')};
		border: 3px solid #0785fd;
		top: ${(props) => (props.top ? props.top : '')};
		color: white;
		font-size: ${(props) => (props.size === 'small' ? '1.2rem' : '1rem')};
		line-height: 0;
		padding-top: ${(props) => (props.size === 'small' ? '1.7rem' : '1.6rem')};
		padding-bottom: ${(props) => (props.size === 'small' ? '1.7rem' : '1.6rem')};
		padding-left: 2.4rem;
		padding-right: 2.4rem;
		transition: color .2s ease-in;
		transition: background-color .2s ease-in;
		position: relative;
		border-left: ${(props) => (props.hasBorder ? '7px solid #d303ff' : '')};
		border-right: ${(props) => (props.hasBorder ? '7px solid #d303ff' : '')};

		&:hover {
			background-color: #00c338;
			border: 3px solid #81ff76;
		}

		&:active {
		}

		&:focus {
			outline: none;
		}
	}

	@media only screen and (max-width: 900px) {
		button {
			font-size: ${(props) => (props.size === 'small' ? '.9rem' : '1.2rem')};
		}
	}

	margin-bottom: 2rem;
`;

const Button = ({
	isATag,
	href,
	target,
	rel,
	handleClick,
	children,
	size,
	position,
	hasBorder,
	bottom,
	top,
	backgroundColor,
	letterSpacing
}) => (
	<Wrapper
		size={size}
		top={top}
		backgroundColor={backgroundColor}
		hasBorder={hasBorder}
		letterSpacing={letterSpacing}
		style={{ position: position, bottom: bottom }}
	>
		{isATag ? (
			<a href={href} target={target} rel={rel}>
				{children}
			</a>
		) : (
			<button onClick={handleClick}>{children}</button>
		)}
	</Wrapper>
);

export default Button;
