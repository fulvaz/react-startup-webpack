import ReactDOM from'react-dom';
import React from 'react';
import CommentBox from './example';



ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000} />,
    document.getElementById('content')
);