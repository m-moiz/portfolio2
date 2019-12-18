import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import Reveal from 'react-reveal/Reveal';

const Wrapper = styled.div`
	margin-right: .5rem;
	i {
		color: ${(props) => (props.color ? props.color : 'black')};
	}
`;

const ListIcon = ({ children, color }) => (
	<IconContext.Provider value={{ color: color }}>
		<Wrapper>
			<Reveal>{children}</Reveal>
		</Wrapper>
	</IconContext.Provider>
);

export default ListIcon;
