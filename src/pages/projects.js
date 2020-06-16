import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import SEO from '../components/seo';
import styled from 'styled-components';

import ProjectContent from '../components/project-content/project-content';
const ProjectPage = () => (
	<Layout>
		<SEO title="Projects" />
		<Header />
		<ProjectContent noTitle />
	</Layout>
);

export default ProjectPage;
