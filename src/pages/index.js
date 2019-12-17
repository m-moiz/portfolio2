import React from 'react';
import styled from 'styled-components';

import StyledHeroBackground from '../components/hero-background/hero-background';
import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section-title/section-title';
import Project from '../components/project/project';
import ProjectTitle from '../components/project-title/project-title';
import ListContainer from '../components/list-container/list-container';
import ListIcon from '../components/list-icon/list-icon';
import ListItem from '../components/list-item/list-item';

import SEO from '../components/seo';

const StyledLists = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin-top: 4rem;
`;

const IndexPage = () => {
	const iconClass = 'fas fa-check';
	return (
		<Layout>
			<SEO title="Home" />
			<StyledHeroBackground />
			<Section>
				<SectionTitle>Projects</SectionTitle>
				<Project>
					<ProjectTitle title="Axon" desc="An Issue Tracker for Teams" />
					<video width="1368" height="500" controls>
						<source />
					</video>

					<StyledLists>
						<ListContainer listTitle="Features: ">
							<ListItem>
								<ListIcon icon={iconClass} color="green" />
								<p>Track Issues</p>
							</ListItem>
							<ListItem>
								<ListIcon icon={iconClass} color="green" />
								<p>Plan Projects</p>
							</ListItem>
							<ListItem>
								<ListIcon icon={iconClass} color="green" />
								<p>Organize Teams</p>
							</ListItem>
						</ListContainer>

						<ListContainer listTitle="Built Using: ">
							<ListItem>
								<ListIcon icon="fab fa-react" />
								<p>React</p>
							</ListItem>
							<ListItem>
								<ListIcon icon="fab fa-sass" />
								<p>Sass</p>
							</ListItem>
							<ListItem>
								<ListIcon icon={iconClass} />
								<p>MongoDB</p>
							</ListItem>
						</ListContainer>
					</StyledLists>
				</Project>
			</Section>
			<Section>
				<SectionTitle color="rgba(255, 99, 234, 0.65)">My Skills</SectionTitle>
			</Section>
			<Section>
				<SectionTitle color="rgba(51, 126, 255, 0.82)">Contact</SectionTitle>
			</Section>
		</Layout>
	);
};

export default IndexPage;
