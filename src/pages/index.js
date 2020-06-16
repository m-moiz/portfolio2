import React from 'react';
import styled from 'styled-components';
import StyledHeroBackground from '../components/hero-background/hero-background';
import Layout from '../components/layout/layout';
import Section from '../components/section/section';
import ProjectContent from '../components/project-content/project-content';
import ContactForm from '../components/contact-form/contact-form';
import SkillsList from '../components/skills-list/skills-list';
import About from '../components/about/about';
import SEO from '../components/seo';

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
				<Section>
					<About />
				</Section>
				<ProjectContent id="projects" />
				<Section display="flex" flexDirection="row" justifyContent="center">
					<StyledSkills>
						<SkillsList />
					</StyledSkills>
				</Section>
				<Section background="rgb(171, 86, 214)" display="flex" flexDirection="row" justifyContent="center">
					<ContactForm />
				</Section>
			</Wrapper>
		</Layout>
	);
};

export default IndexPage;
