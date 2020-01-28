/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from 'styled-components';

import './layout.css';

const Body = styled.div`
	background-color: white;
	width: 100vw;
	overflow-x: hidden;
	overflow-y: auto;
`;

const Layout = ({ children }) => {
	return (
		<Body>
			<div>
				<main>{children}</main>
				<footer />
			</div>
		</Body>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
