import React from 'react';
import Section from '../section/section';
import SectionTitle from '../section-title/section-title';
import ProjectTitle from '../project-title/project-title';
import ListContainer from '../list-container/list-container';
import ListIcon from '../list-icon/list-icon';
import ListItem from '../list-item/list-item';
import Button from '../button/button.component';
import Project from '../project/project';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

import styled from 'styled-components';

const StyledLists = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	margin-top: 4rem;
	margin-bottom: 2rem;

	div:nth-child(1) {
		justify-self: center;
	}

	@media only screen and (max-width: 517px) {
		div {
			justify-self: center;
		}

		div:nth-child(1) {
			justify-self: center;
		}
	}
`;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin-bottom: 4rem;
`;

const ImgWrapper = styled.div`width: 50%;`;

const StyledP = styled.p`@media only screen and (max-width: 900px) {padding-top: .5rem;}`;

const ProjectContent = ({ noTitle, id }) => {
	const image = useStaticQuery(graphql`
		query MyQuery {
			file1: file(relativePath: { eq: "img-2.png" }) {
				childImageSharp {
					fluid(maxWidth: 1349, maxHeight: 735, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			file2: file(relativePath: { eq: "img-1.png" }) {
				childImageSharp {
					fluid(maxWidth: 1349, maxHeight: 735, quality: 100) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return (
		<Section id={id} background="#313131">
			<Project>
				<ProjectTitle title="Axon" desc="An Issue Tracker for Teams" />
				<Wrapper>
					<ImgWrapper>
						<Img fluid={image.file1.childImageSharp.fluid} alt="Image of project" />
					</ImgWrapper>
				</Wrapper>

				<Wrapper>
					<ImgWrapper>
						<Img fluid={image.file2.childImageSharp.fluid} alt="Image of project" />
					</ImgWrapper>
				</Wrapper>

				<Button isATag href="https://axon-js.tools" target="_blank" rel="noopener noreferrer">
					Go To Axon
				</Button>
			</Project>
		</Section>
	);
};

export default ProjectContent;
