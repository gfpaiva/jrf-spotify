import React, { Component } from 'react';
import ColorThief from 'color-thief-browser';

import './track.css';

const colorThief = new ColorThief();

const darken = (colors, value = 20) => colors.map(color => color - value);

class Track extends Component {

	state = {
		background: []
	}

	componentDidMount() {

		if(this.inputImage) {

			this.inputImage.crossOrigin = 'Anonymous';

			this.inputImage.onload = () => {

				this.inputImage.crossOrigin = 'Anonymous';
				let background;

				try {
					background = colorThief.getColor(this.inputImage, 600);
				} catch (err) {
					background = [0, 0, 0];
				}

				this.setState({ background });
			}
		}
	}

	componentWillUnmount() {

		this.inputImage = null;
		if( document.querySelector('canvas') ) document.querySelector('canvas').remove();
	}

	render() {

		const { track } = this.props;
		const { background } = this.state;

		return (
			<div className="track" style={{ background: `linear-gradient(rgb(${background}),
				rgb(${darken(background)}),
				rgb(${darken(background, 40)}),
				rgb(${darken(background, 60)}),
				rgb(${darken(background, 120)}),
				black 90%)` }}>
				<div className="track__content">
					<div className="track__image">
						{track.album.images[0] && <img src={track.album.images[0].url} alt={track.name} ref={el => this.inputImage = el} width={600} height={600} />}
					</div>
					<h2 className="track__name">
						<a href={track.external_urls.spotify} target="_blank">{track.name}</a>
					</h2>
					<p className="track__artists">
						{track.artists.map(artist => <span className="track__artist" key={artist.id}><a href={artist.external_urls.spotify}>{artist.name}</a></span>)}
					</p>
				</div>
			</div>
		);
	}
}

export default Track;