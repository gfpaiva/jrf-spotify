import React from 'react';

import LinkLogo from './LinkLogo';

import reactLogo from '../../assets/logo-react.svg';
import spotifyLogo from '../../assets/logo-spotify.svg';
import './header.css';

const Header = () => (
	<header className="header">
		<div className="header__logos">
			<LinkLogo href="https://reactjs.org/" src={reactLogo} alt="React" />
			<LinkLogo href="https://www.spotify.com/" src={spotifyLogo} alt="Spotify" />
		</div>
	</header>
);

export default Header;