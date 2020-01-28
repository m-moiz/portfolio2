import React from 'react';
import styled from 'styled-components';

import HeroContent from '../hero-content/hero-content';

const BackgroundSection = () => (
	<StyledHeroBackground>
		<HeroContent />
	</StyledHeroBackground>
);

const StyledHeroBackground = styled.div`
	position: relative;
	background-image: url('./background.svg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	height: 768px;
	display: flex;
`;

export default BackgroundSection;
