import React, { Component } from 'react';


import './play.css';
import play from '../../assets/play.svg';
import replay from '../../assets/replay.svg';
import pause from '../../assets/pause.svg';

class Play extends Component {

	state = {
		audioIcon: play,
		audioStatus: 'stopped'
	}

	componentDidMount() {

		if( this.audio ) {

			this.audio.onended = () => {
				this.setState({
					audioIcon: replay,
					audioStatus: 'replay'
				});
			};
		}
	}

	playSong = () => {

		const { audioStatus } = this.state;

		this.setState(() => {
			if(audioStatus === 'stopped') {

				this.audio.play();
				return {
					audioIcon: pause,
					audioStatus: 'playing'
				}
			} else if(audioStatus === 'playing') {

				this.audio.pause();
				return {
					audioIcon: play,
					audioStatus: 'stopped'
				}
			} else {

				this.audio.currentTime = 0;
				this.audio.play();
				return {
					audioIcon: pause,
					audioStatus: 'playing'
				}
			}
		});

	}

	render() {

		const { audio } = this.props;
		const { audioIcon } = this.state;

		return (
			<div className="play">
				<audio src={audio} preload="auto" ref={e => this.audio = e}></audio>
				<button className="play__button" onClick={this.playSong}>
					<img className="play__icon" src={audioIcon} width={250} height={250} alt="Player Control" />
				</button>
			</div>
		);
	}
}

export default Play;