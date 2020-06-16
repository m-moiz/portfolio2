import React from 'react';
import styled from 'styled-components';
import { FaReact, FaSass } from 'react-icons/fa';
import { DiRedis, DiMongodb, DiNodejs, DiJava, DiDocker, DiGit } from 'react-icons/di';
import { Icon } from '@iconify/react';
import reduxIcon from '@iconify/icons-logos/redux';
import ListContainer from '../list-container/list-container';
import ListIcon from '../list-icon/list-icon';
import ListItem from '../list-item/list-item';

const StyledP = styled.p`@media only screen and (max-width: 900px) {padding-top: .5rem;}`;

function SkillsList() {
	return (
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
	);
}

export default SkillsList;
