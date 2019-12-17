import React, { Component } from 'react';
import './button.styles.scss';
class Button extends Component {
	render() {
		return (
			<div
				className="p_button"
				style={{
					top: this.props.top,
					left: this.props.left
				}}
			>
				<button
					style={{ right: this.props.right }}
					className="p_b"
					onMouseOver={this.props.handlePageChange}
					onMouseOut={this.props.reversePageChange}
				>
					{this.props.text}
				</button>
			</div>
		);
	}
}

export default Button;
