import React from 'react';

import './instructions.css';
import Button from '../Button';

const Instructions = ( { getToken } ) => (
	<div className="wrapper wrapper--all-center">
		<div className="instructions">
			<div>
				<p>
					Vamos começar!<br />
					Antes de tudo preciso que você tenha uma conta no spotify, <br />
					se logue e autorize eu fazer a baguncinha 😈.
				</p>
				<Button handleClick={getToken} >
					Login on Spotify
				</Button>
			</div>
		</div>
	</div>
);

export default Instructions;