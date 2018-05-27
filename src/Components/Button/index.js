import React, { Component } from 'react';

import './button.css';

class Button extends Component {

	initialState = {
		clicked: false,
		clickedX: 0,
		clickedY: 0
	}

	timeout = null;

	state = this.initialState;

	buttonClick = e => {
		const { handleClick } = this.props;

		if(!handleClick) return;

		e.preventDefault();

		clearTimeout(this.timeout);
		this.setState(this.initialState);

		const x = e.pageX - e.target.offsetLeft;
		const y = e.pageY - e.target.offsetTop;

		this.setState(() => ({
			clicked: true,
			clickedX: x,
			clickedY: y
		}), () => {
			this.timeout = setTimeout(() => {
				this.setState(this.initialState);
			}, 800);
		});

		handleClick(e);
	}

	render() {
		const { href = '#', primary, children } = this.props;
		const { clicked, clickedX, clickedY } = this.state;

		return (
			<a className={`button${primary ? ' button--primary' : ''}`} href={href} onClick={this.buttonClick}>
				{clicked && <span className="button__overlay" style={{left: clickedX, top: clickedY}}></span>}
				{children}
			</a>
		);
	}
}

export default Button;