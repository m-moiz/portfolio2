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

import Menu from '../menu/menu';
import './layout.css';

const Body = styled.div`
	background-color: white;
	width: 100vw;
	height: 100vh;
	overflow-x: hidden;
`;

const Layout = ({ children }) => {
	return (
		<Scrollbars style={{ width: '100vw', height: '100vh' }}>
			<Body>
				<Menu />
				<div>
					<main>{children}</main>
					<footer />
				</div>
			</Body>
		</Scrollbars>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
