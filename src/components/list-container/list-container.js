import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;
const ListTitle = styled.h3`
	font-size: 2.2rem;
	margin-bottom: 1rem;
`;

const ListContainer = ({ children, listTitle }) => (
	<Wrapper>
		<ListTitle>{listTitle}</ListTitle>
		<ul>{children}</ul>
	</Wrapper>
);

export default ListContainer;
