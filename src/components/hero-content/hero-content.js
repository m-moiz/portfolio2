import React from 'react';
import styled, { keyframes } from 'styled-components';
import Header from '../header/header';
import AtagButton from '../a-tag-button/a-tag-button.component';

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
	@import url("https://fonts.googleapis.com/css2?family=Mako&display=swap");
	letter-spacing: 0.05rem;
	font-family: 'Mako', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 52px;
	line-height: 126px;
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 768px;
	justify-content: center;
	align-items: center;
	color: white;

	animation: ${slideFromBottom} .2s ease-in-out 1;
`;

const MainHeader = styled.h1`
	@import url("https://fonts.googleapis.com/css2?family=Mako&display=swap");
	animation: ${slideFromLeft} .4s ease-in-out 1;
	font-family: 'Mako', sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 52px;
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
	font-size: 24px;
	line-height: 29px;
	letter-spacing: 0.05rem;
	word-spacing: 0.2rem;
	opacity: .9;
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

const HeroContent = () => (
	<React.Fragment>
		<Header />
		<Wrapper>
			<MainHeader>Muhammad Moiz</MainHeader>
			<Description>I enjoy building websites and solving problems.</Description>
			<AtagButton href="#projects" />
		</Wrapper>
	</React.Fragment>
);

export default HeroContent;
