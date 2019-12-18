import React from 'react';
import styled from 'styled-components';

import { FaCheck, FaReact, FaSass } from 'react-icons/fa';
import { DiRedis, DiNginx, DiMongodb } from 'react-icons/di';

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
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	margin-top: 4rem;
	margin-bottom: 4rem;

	@media only screen and (max-width: 517px) {
		div:nth-child(1) {
			div {
				margin-bottom: 1rem;
			}
		}

		div:nth-child(2) {
			div {
				justify-self: center;
			}
		}
	}
`;

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
			<Section>
				<SectionTitle>Projects</SectionTitle>
				<Project>
					<ProjectTitle title="Axon" desc="An Issue Tracker for Teams" />
					<video width="1368" height="500" controls>
						<source />
					</video>

					<StyledLists>
						<ListContainer containerStyle={{ justifySelf: 'center' }} listTitle="Features: ">
							<ListItem>
								<ListIcon color="green">
									<FaCheck />
								</ListIcon>
								<p>Track Issues</p>
							</ListItem>
							<ListItem>
								<ListIcon color="green">
									<FaCheck />
								</ListIcon>
								<p>Plan Projects</p>
							</ListItem>
							<ListItem>
								<ListIcon color="green">
									<FaCheck />
								</ListIcon>
								<p>Organize Teams</p>
							</ListItem>
							<ListItem>
								<ListIcon color="green">
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
								<p>React</p>
							</ListItem>
							<ListItem>
								<ListIcon color="red">
									<DiRedis />
								</ListIcon>
								<p>Redis</p>
							</ListItem>
							<ListItem>
								<ListIcon color="pink">
									<FaSass />
								</ListIcon>
								<p>Sass</p>
							</ListItem>
							<ListItem>
								<ListIcon color="green">
									<DiMongodb />
								</ListIcon>
								<p>MongoDB</p>
							</ListItem>
							<ListItem>
								<ListIcon>
									<DiNginx />
								</ListIcon>
								<p>Nginx</p>
							</ListItem>
							<ListItem>
								<ListIcon>
									<DiNginx />
								</ListIcon>
								<p>Redux</p>
							</ListItem>
						</ListContainer>
					</StyledLists>
				</Project>
			</Section>
			<Section>
				<SectionTitle color="rgba(255, 99, 234, 0.65)">My Skills</SectionTitle>
				<StyledSkills>
					<ListContainer center style="grid" listTitle="Technologies: ">
						<ListItem>
							<ListIcon color="blue">
								<FaReact />
							</ListIcon>
							<p>React</p>
						</ListItem>
						<ListItem>
							<ListIcon color="red">
								<DiRedis />
							</ListIcon>
							<p>Redis</p>
						</ListItem>
						<ListItem>
							<ListIcon color="pink">
								<FaSass />
							</ListIcon>
							<p>Sass</p>
						</ListItem>
						<ListItem>
							<ListIcon color="green">
								<DiMongodb />
							</ListIcon>
							<p>MongoDB</p>
						</ListItem>
						<ListItem>
							<ListIcon>
								<DiNginx />
							</ListIcon>
							<p>Nginx</p>
						</ListItem>
						<ListItem>
							<ListIcon>
								<DiNginx />
							</ListIcon>
							<p>Redux</p>
						</ListItem>
					</ListContainer>
				</StyledSkills>
			</Section>
			<Section>
				<SectionTitle color="rgba(51, 126, 255, 0.82)">Contact</SectionTitle>
			</Section>
		</Layout>
	);
};

export default IndexPage;
