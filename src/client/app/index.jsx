import React from 'react';
import ReactDOM from 'react-dom';


class Home extends React.Component {
  render() {
    return <h1>Hi</h1>
  }
}

ReactDOM.render(
    <Home />,
    document.getElementById('app')
);
