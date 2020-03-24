import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import HeroContent from '../hero-content/hero-content';

const BackgroundSection = ({ className }) => (
	<StaticQuery
		query={graphql`
			query {
				desktop: file(relativePath: { eq: "hero_image.jpg" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 1920) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={(data) => {
			// Set ImageData.
			const imageData = data.desktop.childImageSharp.fluid;
			return (
				<BackgroundImage Tag="section" className={className} fluid={imageData}>
					<HeroContent />
				</BackgroundImage>
			);
		}}
	/>
);

const StyledHeroBackground = styled(BackgroundSection)`
position: absolute;
height: 768px;
background-size: cover !important;
left: 0px;
top: 0px;
  &:before {
	  filter: brightness(0.5);
	  opacity: 1 !important;
  }
`;

export default StyledHeroBackground;
