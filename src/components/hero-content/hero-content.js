import React from 'react';

import styled, { keyframes } from 'styled-components';

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
	position: relative;

	@media only screen and (max-width: 411px) {
		right: 10.2rem;
		width: 90vw;
		padding-left: 1.7rem;
		padding-top: 3.7rem;
		height: 20rem;
	}

	@media only screen and (max-width: 450px) and (min-width: 412px) {
		right: 10.2rem;
		width: 153%;
		padding-left: 1.7rem;
		padding-top: 3.7rem;
		height: 20rem;
	}

	@media only screen and (max-width: 500px) and (min-width: 451px) {
		right: 9rem;
		width: 130%;
		padding-left: 1.7rem;
		padding-top: 3.7rem;
		height: 20rem;
	}

	@media only screen and (max-width: 576px) and (min-width: 501px) {
		right: 7rem;
		width: 110%;
		padding-left: 1.7rem;
		padding-top: 3.7rem;
		height: 20rem;
	}

	@media only screen and (max-width: 643px) and (min-width: 577px) {
		right: 7rem;
		width: 110%;
		padding-left: 1.7rem;
	}

	@media only screen and (max-width: 840px) and (min-width: 644px) {
		width: 100%;
		padding-left: 2rem;
		right: 5rem;
	}

	clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
	right: 3rem;
	top: 3rem;
	background-color: rgba(255, 255, 255, 0.7);
	text-shadow: white 0px 0px 1px;
	animation: ${slideFromBottom} .2s ease-in-out 1;
	border: 1px solid black;
	width: 80%;
	height: 16rem;
	padding-top: 2rem;
	padding-left: 4rem;
	color: rgba(0, 0, 0, 1);
`;

const MainHeader = styled.h1`
	animation: ${slideFromLeft} .4s ease-in-out 1;
	opacity: 1;

	@media only screen and (max-width: 1085px) and (min-width: 1042px) {
		font-size: 2.6rem !important;
	}

	@media only screen and (max-width: 1041px) {
		font-size: 2.2rem !important;
	}

	@media only screen and (max-width: 840px) and (min-width: 500px) {
		font-size: 2.1rem !important;
	}

	@media only screen and (max-width: 499px) {
		font-size: 1.9rem !important;
	}
`;

const Description = styled.h3`
	animation: ${slideFromRight} .4s ease-in-out 1;
	opacity: 1;

	@media only screen and (max-width: 499px) {
		font-size: .9rem !important;
	}

	@media only screen and (max-width: 840px) and (min-width: 500px) {
		font-size: 1.1rem !important;
	}

	@media only screen and (max-width: 1041px) and (min-width: 841px) {
		font-size: 1.2rem !important;
	}

	@media only screen and (max-width: 1085px) and (min-width: 1042px) {
		font-size: 1.4rem !important;
	}
`;

const HeroContent = () => (
	<Wrapper>
		<MainHeader>Hi, My name is Moiz</MainHeader>
		<Description>I am a passionate full stack developer ready to build great websites for you.</Description>
	</Wrapper>
);

export default HeroContent;
