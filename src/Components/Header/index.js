import React from 'react';

import LinkLogo from './LinkLogo';

import reactLogo from '../../assets/logo-react.svg';
import spotifyLogo from '../../assets/logo-spotify.svg';
import './header.css';

const Header = ( { me } ) => (
	<header className="header">
		<div className="header__logos">
			<LinkLogo href="https://reactjs.org/" src={reactLogo} alt="React" />
			<LinkLogo href="https://beta.developer.spotify.com/documentation/web-api/reference/" src={spotifyLogo} alt="Spotify" />
			{me && me.images[0].url && <LinkLogo href={me.external_urls.spotify} src={me.images[0].url} alt={me.display_name} /> }
		</div>
	</header>
);

export default Header;