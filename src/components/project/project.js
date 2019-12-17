import React from 'react';
import styled from 'styled-components';

const ProjectContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Project = ({ children }) => <ProjectContainer>{children}</ProjectContainer>;

export default Project;
