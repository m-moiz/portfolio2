import React from 'react';

import styled, { keyframes } from 'styled-components';
import Header from '../header/header';
const slideFromLeft = keyframes`
   from {
	  opacity: 0;
      transform: translateX(-14rem);
   }
   
   to {
	  opacity: 1;
      transform: tranlateX(0);
   }

`;

const slideFromRight = keyframes`
   from {
	  opacity: 0;
      transform: translateX(14rem);
   }
   
   to {
	  opacity: 1;
      transform: tranlateX(0);
   }

`;

const slideFromBottom = keyframes`
   from {
	  opacity: 0;
      transform: translateY(10rem);
   }
   
   to {
	  opacity: 1;
      transform: tranlateY(0);
   }

`;

const Wrapper = styled.div`
	@media screen and (min-width: 960px) {
		position: absolute;
		width: 1023px;
		height: 182px;
		left: 112px;
		top: 267px;
	}

	font-family: 'Mako', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 70px;
	line-height: 126px;
	letter-spacing: 0.005em;
	display: flex;
	flex-direction: column;
	color: black;

	animation: ${slideFromBottom} .2s ease-in-out 1;

	@media screen and (max-width: 960px) {
		width: 100vw;
		justify-content: center;
		align-items: center;
	}
`;

const MainHeader = styled.h1`
	animation: ${slideFromLeft} .4s ease-in-out 1;
	font-family: 'Puritan', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 72px;
	line-height: 80px;
	opacity: 1;

	@media screen and (max-width: 820px) {
		font-size: 62px;
	}

	@media screen and (max-width: 600px) {
		font-size: 50px;
	}
`;

const Description = styled.h3`
	animation: ${slideFromRight} .4s ease-in-out 1;
	font-family: Puritan;
	font-style: normal;
	font-weight: normal;
	font-size: 26px;
	line-height: 29px;
	letter-spacing: 0.105em;
	opacity: .9;

	@media screen and (max-width: 820px) {
		font-size: 20px;
	}

	@media screen and (max-width: 600px) {
		font-size: 18px;
	}
`;

const Polygon1 = styled.div`
	position: absolute;
	width: 340px;
	height: 220px;
	left: 70%;
	top: -160px;
	background: #ffffff;
	border-radius: 64px;

	@media screen and (max-width: 1280px) {
		left: 67%;
	}

	@media screen and (max-width: 1176px) {
		left: 64%;
	}

	@media screen and (max-width: 1080px) {
		left: 60%;
	}

	@media screen and (max-width: 968px) {
		left: 32%;
	}

	@media screen and (max-width: 920px) {
		left: 28%;
	}

	@media screen and (max-width: 772px) {
		left: 25%;
	}
`;

const HeroContent = () => (
	<React.Fragment>
		<Polygon1>
			<Header />
		</Polygon1>

		<Wrapper>
			<MainHeader>Hi, My name is Moiz</MainHeader>
			<Description>I enjoy building websites and solving problems.</Description>
		</Wrapper>
	</React.Fragment>
);

export default HeroContent;
