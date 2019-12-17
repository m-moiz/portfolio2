import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin-right: .5rem;
	i {
		color: ${(props) => (props.color ? props.color : 'black')};
	}
`;

const ListIcon = ({ icon, color }) => (
	<Wrapper color={color}>
		<i className={icon} />
	</Wrapper>
);

export default ListIcon;
