import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';

const Wrapper = styled.div`
	margin-right: .5rem;
	i {
		color: ${(props) => (props.color ? props.color : 'black')};
	}
`;

const ListIcon = ({ children, color }) => (
	<IconContext.Provider value={{ color: color }}>
		<Wrapper>{children}</Wrapper>
	</IconContext.Provider>
);

export default ListIcon;
