import React from 'react';
import styled from 'styled-components';

const StyledLi = styled.li`
	list-style-type: none;
	display: flex;
	flex-direction: row;
	font-size: inherit;
	justify-self: center;
`;

const ListItem = ({ children }) => <StyledLi>{children}</StyledLi>;

export default ListItem;
