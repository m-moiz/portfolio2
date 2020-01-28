import React from 'react';

import Section from '../section/section';
import SectionTitle from '../section-title/section-title';
import ProjectTitle from '../project-title/project-title';
import ListContainer from '../list-container/list-container';
import ListIcon from '../list-icon/list-icon';
import ListItem from '../list-item/list-item';
import Button from '../button/button.component';
import Project from '../project/project';
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

const StyledP = styled.p`@media only screen and (max-width: 900px) {padding-top: .5rem;}`;

const ProjectContent = () => (
	<Section>
		<SectionTitle>Projects</SectionTitle>
		<Project>
			<ProjectTitle title="Axon" desc="An Issue Tracker for Teams" />

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
);

export default ProjectContent;
