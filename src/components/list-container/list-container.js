import React from 'react';
import styled from 'styled-components';

const Container = styled.div`@media only screen and (min-width: 900px) {font-size: 1.5rem;}`;
const ListTitle = styled.h3`
	font-size: inherit;
	display: ${(props) => (props.center ? 'flex' : 'block')};
	justify-content: center;
	color: ${(props) => (props.hasLightColor ? '#292929' : '')};
	height: ${(props) => (props.height ? props.height : '30px')};
	align-items: center;
	margin-bottom: 2.3rem;
	background: ${(props) => (props.hasPurpleHeader ? '#b73dce' : '')};
`;

const StyledUl = styled.ul`
	display: grid;
	grid-template-columns: ${(props) =>
		props.gridStyle === 'auto' ? 'repeat(auto-fit, minmax(200px, 1fr))' : '150px 150px 150px'};
	grid-auto-flow: dense;
	margin-left: 0;
	margin-right: 1.45rem;
	font-size: 1.2rem;
	letter-spacing: -0.07rem;
	color: ${(props) => (props.hasLightColor ? '#656565' : '')};
`;

const ListContainer = ({
	hasLightColor,
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
			<ListTitle
				hasLightColor={hasLightColor}
				height={titleHeight}
				center={center}
				hasPurpleHeader={hasPurpleHeader}
			>
				{listTitle}
			</ListTitle>
			{style === 'grid' ? (
				<StyledUl gridStyle={gridStyle} hasLightColor={hasLightColor}>
					{children}
				</StyledUl>
			) : (
				<ul style={{ letterSpacing: '-0.07rem', color: '#656565', fontSize: '1.2rem' }}>{children}</ul>
			)}
		</div>
	</Container>
);

export default ListContainer;
