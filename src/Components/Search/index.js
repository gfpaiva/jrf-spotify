import React, { Component } from 'react';

import searchIcon from '../../assets/search.svg';
import './search.css';

class Search extends Component {

	state = {
		searchActive: false
	};

	changeSearch = () => {

		this.setState(() => ({
			searchActive: true
		}), () => {
			setTimeout(() => {
				this.inputElement.focus();
			}, 1000);
		});
	}

	render() {

		const { searchActive } = this.state;

		return (
			<div className="search">
				<button className={searchActive ? "search__button search__button--active" : "search__button"} onClick={this.changeSearch}>
					<img className="search__icon" src={searchIcon} alt="Search" width={25} height={25}/>
				</button>

				{searchActive && (
					<form className="search__form">
						<input type="text" className="search__input search__input--active" placeholder="Pesquise pelo id da faixa 🎶" ref={el => this.inputElement = el} />
					</form>
				)}
			</div>
		);
	}
}

export default Search;