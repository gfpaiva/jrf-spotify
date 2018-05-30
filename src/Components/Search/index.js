import React, { Component } from 'react';

import Warning from '../Warning';
import Track from '../Track';

import searchIcon from '../../assets/search.svg';
import './search.css';

class Search extends Component {

	initialState = {
		searchComplete: false,
		error: null,
		track: null
	}

	state = {
		...this.initialState,
		searchActive: false,
		typingTimeout: 0,
		query: '',
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

	typeHandler = e => {
		const { typingTimeout } = this.state;
		const { spotifyApi } = this.props;
		const value = e.target.value;

		if (typingTimeout) clearTimeout(typingTimeout);

		this.setState({
			...this.initialState,
			query: e.target.value
		});

		if(value.length > 2) {
			this.setState({
				typingTimeout: setTimeout(() => {
					spotifyApi.getTrack(this.state.query)
						.then(track => this.setState({ track }))
						.catch(err => {
							const errorObject = JSON.parse(err.response).error;
							const errorStatus = errorObject.status;
							const errorMessage = errorObject.message;

							this.setState({ error: `Ocorreu um erro: ${(errorStatus && errorMessage) ? `[${errorStatus}] - ${errorMessage}` : ''} 😢` });
						});
				}, 500)
			})
		}
	}

	render() {

		const { searchActive, query, error, track } = this.state;

		return (
			<div className="wrapper-search">
				<div className="search">
					<button className={searchActive ? "search__button search__button--active" : "search__button"} onClick={this.changeSearch}>
						<img className="search__icon" src={searchIcon} alt="Search" width={25} height={25}/>
					</button>

					{searchActive && (
						<form className="search__form">
							<input type="text" className="search__input search__input--active" placeholder="Pesquise pelo id da faixa 🎧" ref={el => this.inputElement = el} value={query} onChange={this.typeHandler} />
						</form>
					)}
				</div>

				{error && (
					<Warning>
						<span>{error}</span>
					</Warning>
				)}

				{track && (
					<Track track={track} />
				)}
			</div>
		);
	}
}

export default Search;