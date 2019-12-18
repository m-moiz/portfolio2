import React from 'react';
import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import SectionTitle from '../components/section-title/section-title';
import ProjectTitle from '../components/project-title/project-title';
import ListContainer from '../components/list-container/list-container';
import ListIcon from '../components/list-icon/list-icon';
import ListItem from '../components/list-item/list-item';
import Button from '../components/button/button.component';
import Project from '../components/project/project';

import { FaCheck, FaReact, FaSass } from 'react-icons/fa';
import { DiRedis, DiNginx, DiMongodb, DiNodejs, DiJava, DiDocker } from 'react-icons/di';
import { Icon, InlineIcon } from '@iconify/react';
import reduxIcon from '@iconify/icons-logos/redux';

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

const ProjectPage = () => (
	<Layout>
		<Section>
			<SectionTitle>Projects</SectionTitle>
			<Project>
				<ProjectTitle title="Axon" desc="An Issue Tracker for Teams" />
				<video width="1368" height="500" controls>
					<source />
				</video>

				<StyledLists>
					<ListContainer
						containerStyle={{ justifySelf: 'center', marginBottom: '3rem', marginRight: '4rem' }}
						listTitle="Features: "
					>
						<ListItem>
							<ListIcon small color="green">
								<FaCheck />
							</ListIcon>
							<p>Track Issues</p>
						</ListItem>
						<ListItem>
							<ListIcon small color="green">
								<FaCheck />
							</ListIcon>
							<p>Plan Projects</p>
						</ListItem>
						<ListItem>
							<ListIcon small color="green">
								<FaCheck />
							</ListIcon>
							<p>Organize Teams</p>
						</ListItem>
						<ListItem>
							<ListIcon small color="green">
								<FaCheck />
							</ListIcon>
							<p>Responsive</p>
						</ListItem>
					</ListContainer>

					<ListContainer gridStyle="auto" style="grid" listTitle="Built Using: ">
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
							<ListIcon>
								<DiNginx />
							</ListIcon>
							<StyledP>Nginx</StyledP>
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
							<StyledP>Nodejs</StyledP>
						</ListItem>
					</ListContainer>
				</StyledLists>
				<Button>Go To Axon</Button>
			</Project>
		</Section>
	</Layout>
);

export default ProjectPage;
