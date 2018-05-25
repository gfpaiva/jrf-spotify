import React, { Component } from 'react';
import PulseLoader from 'halogen/PulseLoader';

class App extends Component {
	render() {
		return (
			<div>
				<h1>JRF - SPOTIFY</h1>
				<PulseLoader color="#26A65B" size="16px" margin="4px" />
			</div>
		);
	}
}

export default App;