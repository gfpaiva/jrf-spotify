import React from 'react';

import './warning.css';

const Warning = ( { children } ) => (
	<p className="message message--warning">⚠ {children}</p>
);

export default Warning;