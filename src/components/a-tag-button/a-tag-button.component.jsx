import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './a-tag-button.styles.scss';

function AtagButton({ href, target, rel }) {
	return (
		<a className="btn" href={href} target={target} rel={rel}>
			<p className="btn-text">My work</p>
			<FontAwesomeIcon icon={faArrowRight} className='arrow-right'/>
		</a>
	);
}

export default AtagButton;
