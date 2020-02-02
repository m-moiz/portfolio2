import React from 'react';
import styled from 'styled-components';

const Container = styled.div`@media only screen and (min-width: 900px) {font-size: 1.5rem;}`;
const ListTitle = styled.h3`
	font-size: inherit;
	display: ${(props) => (props.center ? 'flex' : 'block')};
	justify-content: center;
	height: ${(props) => (props.height ? props.height : '30px')};
	align-items: center;
	background: ${(props) => (props.hasPurpleHeader ? '#b73dce' : '')};
`;

const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: ${(props) =>
		props.gridStyle === 'auto' ? 'repeat(auto-fit, minmax(200px, 1fr))' : '150px 150px 150px'};
	grid-auto-flow: dense;
	margin-left: 0;
	margin-right: 1.45rem;
`;

const ListContainer = ({
	containerStyle,
	titleHeight,
	gridStyle,
	children,
	style,
	listTitle,
	center,
	hasPurpleHeader
}) => (
	<Container style={containerStyle}>
		<div>
			<ListTitle height={titleHeight} center={center} hasPurpleHeader={hasPurpleHeader}>
				{listTitle}
			</ListTitle>
			{style === 'grid' ? <StyledUl gridStyle={gridStyle}>{children}</StyledUl> : <ul>{children}</ul>}
		</div>
	</Container>
);

export default ListContainer;
