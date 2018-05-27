import React from 'react';
import './linklogo.css';

const LinkLogo = ( { href, src, alt, width = 30, height = 30 } ) => (
	<a className="header__logo" href={href} target="_blank"><img src={src} alt={alt} width={width} height={height}/></a>
);

export default LinkLogo;