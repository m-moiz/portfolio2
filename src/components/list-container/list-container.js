import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

const Container = styled.div`@media only screen and (min-width: 900px) {font-size: 1.5rem;}`;
const ListTitle = styled.h3`
	font-size: inherit;
	margin-bottom: 2rem;
	display: ${(props) => (props.center ? 'flex' : 'block')};
	justify-content: center;
`;

const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: ${(props) =>
		props.gridStyle === 'auto' ? 'repeat(auto-fit, minmax(200px, 1fr))' : '150px 150px 150px'};
	grid-auto-flow: dense;
`;

const ListContainer = ({ containerStyle, gridStyle, children, style, listTitle, center }) => (
	<Container>
		<div style={containerStyle}>
			<ListTitle center={center}>
				<Fade>{listTitle}</Fade>
			</ListTitle>
			{style === 'grid' ? <StyledUl gridStyle={gridStyle}>{children}</StyledUl> : <ul>{children}</ul>}
		</div>
	</Container>
);

export default ListContainer;
