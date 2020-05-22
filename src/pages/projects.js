import React from 'react';
import Layout from '../components/layout/layout';
import Header from '../components/header/header';
import styled from 'styled-components';

import ProjectContent from '../components/project-content/project-content';
const ProjectPage = () => (
	<Layout>
		<Header />
		<ProjectContent noTitle />
	</Layout>
);

export default ProjectPage;
