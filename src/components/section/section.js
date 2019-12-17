import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const Section = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Section;
