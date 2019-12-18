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

const StyledSkills = styled.div`
	display: flex;
	width: 100vw;
	margin-top: 4rem;
	margin-bottom: 4rem;
	justify-content: center;
`;

const IndexPage = () => {
	return (
		<Layout>
			<SEO title="Home" />
			<StyledHeroBackground />
			<ProjectContent />
			<Section>
				<SectionTitle color="rgba(255, 99, 234, 0.65)">My Skills</SectionTitle>
				<StyledSkills>
					<ListContainer center gridStyle="auto" style="grid" listTitle="Technologies: ">
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
			<Section>
				<SectionTitle color="rgba(51, 126, 255, 0.82)">Contact</SectionTitle>
				<ContactForm />
			</Section>
		</Layout>
	);
};

export default IndexPage;
