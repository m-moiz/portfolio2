import React from 'react';
import styled from 'styled-components';

import { FaReact, FaSass } from 'react-icons/fa';
import { DiRedis, DiMongodb, DiNodejs, DiJava, DiDocker, DiGit } from 'react-icons/di';
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-logos/redux';

import StyledHeroBackground from '../components/hero-background/hero-background';
import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section-title/section-title';
import ProjectContent from '../components/project-content/project-content';
import ListContainer from '../components/list-container/list-container';
import ListIcon from '../components/list-icon/list-icon';
import ListItem from '../components/list-item/list-item';
import ContactForm from '../components/contact-form/contact-form';
import SEO from '../components/seo';

const StyledP = styled.p`@media only screen and (max-width: 900px) {padding-top: .5rem;}`;

const StyledSkills = styled.div`
	display: flex;
	width: 70vw;
	background: #3a3939;
	color: white;
	margin-top: 4rem;
	margin-bottom: 4rem;
	justify-content: center;

	@media screen and (max-width: 612px) {
		width: 90vw;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<Wrapper>
				<StyledHeroBackground />
				<ProjectContent id="projects" />
				<Section display="flex" flexDirection="row" justifyContent="center">
					<StyledSkills>
						<ListContainer
							center
							titleHeight="60px"
							gridStyle="auto"
							style="grid"
							listTitle="My Skills "
							containerStyle={{ width: '100%' }}
							hasPurpleHeader
						>
							<ListItem>
								<ListIcon color="blue">
									<FaReact />
								</ListIcon>
								<StyledP>React</StyledP>
							</ListItem>
							<ListItem>
								<ListIcon color="red">
									<DiRedis />
								</ListIcon>
								<StyledP>Redis</StyledP>
							</ListItem>
							<ListItem>
								<ListIcon color="pink">
									<FaSass />
								</ListIcon>
								<StyledP>Sass</StyledP>
							</ListItem>
							<ListItem>
								<ListIcon color="green">
									<DiMongodb />
								</ListIcon>
								<StyledP>MongoDB</StyledP>
							</ListItem>
							<ListItem>
								<ListIcon color="blue">
									<DiDocker />
								</ListIcon>
								<StyledP>Docker</StyledP>
							</ListItem>
							<ListItem>
								<ListIcon color="blue">
									<Icon icon={reduxIcon} />
								</ListIcon>
								<StyledP>Redux</StyledP>
							</ListItem>
							<ListItem>
								<ListIcon color="green">
									<DiNodejs />
								</ListIcon>
								<StyledP>NodeJS</StyledP>
							</ListItem>
							<ListItem>
								<ListIcon color="black">
									<DiGit />
								</ListIcon>
								<StyledP>Git</StyledP>
							</ListItem>
							<ListItem>
								<ListIcon color="brown">
									<DiJava />
								</ListIcon>
								<StyledP>Java</StyledP>
							</ListItem>
						</ListContainer>
					</StyledSkills>
				</Section>
				<Section
					background="rgb(171, 86, 214)"
					marginTop="17rem"
					display="flex"
					flexDirection="row"
					justifyContent="center"
				>
					<ContactForm />
				</Section>
			</Wrapper>
		</Layout>
	);
};

export default IndexPage;
