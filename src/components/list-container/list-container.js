import React from 'react';
import styled from 'styled-components';

const ListTitle = styled.h3`
	font-size: 2.2rem;
	margin-bottom: 2rem;
`;

const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: ${(props) =>
		props.gridStyle === 'auto' ? 'repeat(auto-fit, minmax(200px, 1fr))' : '200px 200px 200px'};
	grid-auto-flow: dense;
`;

const ListContainer = ({ containerStyle, gridStyle, children, style, listTitle }) => (
	<div style={containerStyle}>
		<ListTitle>{listTitle}</ListTitle>
		{style === 'grid' ? <StyledUl gridStyle={gridStyle}>{children}</StyledUl> : <ul>{children}</ul>}
	</div>
);

export default ListContainer;
