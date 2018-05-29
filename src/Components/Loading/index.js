import React from 'react';

import ReactLoading from 'react-loading';

const Loading = ( { type = 'bubbles', color = '#242038', height = 80, width = 80 } ) => <ReactLoading type={type} color={color} height={height} width={width} />;

export default Loading;