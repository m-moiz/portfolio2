import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../header/header';
import Button from '../button/button.component';
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
		left: 158px;
		top: 267px;
	}

	letter-spacing: -0.15rem;
	font-family: 'Mako', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 70px;
	line-height: 126px;
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
	@import url("https://fonts.googleapis.com/css?family=Montserrat|Nunito&display=swap");
	animation: ${slideFromLeft} .4s ease-in-out 1;
	font-family: 'Montserrat', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 64px;
	line-height: 80px;
	opacity: 1;

	.purple {
		color: #a900ff;
	}

	.white {
		color: white;
	}

	@media screen and (max-width: 820px) {
		font-size: 62px;
	}

	@media screen and (max-width: 668px) {
		font-size: 58px;
	}

	@media screen and (max-width: 600px) {
		font-size: 50px;
	}

	@media screen and (max-width: 560px) {
		font-size: 40px;
	}

	@media screen and (max-width: 420px) {
		font-size: 35px;
	}
`;

const Description = styled.h3`
	@import url("https://fonts.googleapis.com/css?family=Varela+Round&display=swap");
	font-family: 'Varela Round', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 22px;
	line-height: 29px;
	letter-spacing: -0.05rem;
	word-spacing: 0.2rem;
	opacity: .9;
	position: relative;
	margin-top: .5rem;
	left: 216px;
	animation: ${slideFromRight} .4s ease-in-out 1;

	.pink {
		color: #ff5c98;
	}

	@media screen and (max-width: 970px) {
		font-size: 20px;
		left: 0;
	}

	@media screen and (max-width: 600px) {
		font-size: 16px;
		left: 0;
		bottom: 2rem;
	}

	@media screen and (max-width: 420px) {
		font-size: 14px;
		left: 0;
		bottom: 2rem;
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

	@media screen and (max-width: 880px) {
		left: 30%;
	}

	@media screen and (max-width: 800px) {
		left: 28%;
	}

	@media screen and (max-width: 732px) {
		left: 25%;
	}

	@media screen and (max-width: 684px) {
		left: 24%;
	}

	@media screen and (max-width: 620px) {
		left: 22%;
	}

	@media screen and (max-width: 576px) {
		left: 20%;
	}

	@media screen and (max-width: 552px) {
		left: 18%;
	}

	@media screen and (max-width: 508px) {
		left: 14%;
	}

	@media screen and (max-width: 452px) {
		background: none;
		left: 10%;
	}

	@media screen and (max-width: 420px) {
		left: 7%;
	}

	@media screen and (max-width: 390px) {
		left: 3%;
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
			<Button
				isATag
				href="#projects"
				backgroundColor="#212121"
				position="relative"
				top="2rem"
				letterSpacing="-0.03rem"
				hasBorder
			>
				My work
			</Button>
		</Wrapper>
	</React.Fragment>
);

export default HeroContent;
