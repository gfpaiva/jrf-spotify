import React, { Component } from 'react';

import Header from './Header';
import Instructions from './Instructions';
import Loading from './Loading';

import SpotifyWebApi from 'spotify-web-api-js';
import Search from './Search';

const spotifyApi = new SpotifyWebApi();

class App extends Component {

	state = {
		loading: (window.location.hash && window.location.hash.indexOf('access_token') > 0) ? true : false,
		token: null,
		me: null
	}

	getToken = () => {
		const popUp = window.open(`https://accounts.spotify.com/authorize/?client_id=20cd0fb7f0064aef932c3813201b2850&response_type=token&redirect_uri=${encodeURIComponent(window.location.href)}`, 'Authenticate', 'width=800,height=600,scrollbars=yes');

		const interval = window.setInterval(() => {
			try {
				if (popUp.location.href.indexOf(window.location.host) >= 0) {

					window.clearInterval(interval);

					const hashToParam = JSON.parse('{"' + decodeURI(popUp.location.hash.substring(1)).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');

					if( hashToParam && hashToParam.access_token && hashToParam.access_token.length > 0 ) {

						spotifyApi.setAccessToken(hashToParam.access_token);

						this.setState({
							token: hashToParam.access_token
						});

						spotifyApi.getMe()
							.then(me => this.setState({ me }));

						popUp.close();
					} else {

						console.error('Error on getting token');
						popUp.close();
					}
				}
			} catch (err) {

				console.log(err);
			}
		}, 1000);
	};

	render() {

		const { token, loading, me } = this.state;

		return (
			<div>
				<Header me={me} />

				{/* Carregando */}
				{loading && (
					<div className="wrapper wrapper--all-center">
						<Loading />
					</div>
				)}

				{/* Página inicial, requisitando permissão */}
				{!loading && !token && <Instructions getToken={this.getToken} />}

				{/* App, permissões concedidas */}
				{!loading && token && (
					<div className="wrapper">
						<Search spotifyApi={spotifyApi} />
					</div>
				)}
			</div>
		);
	}
}

export default App;