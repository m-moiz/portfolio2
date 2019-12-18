import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

const StyledLi = styled.li`
	list-style-type: none;
	display: flex;
	flex-direction: row;
	font-size: inherit;
`;

const ListItem = ({ children }) => (
	<StyledLi>
		<Reveal>{children}</Reveal>
	</StyledLi>
);

export default ListItem;
