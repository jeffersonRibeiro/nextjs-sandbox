import React from 'react';

class Example extends React.Component {
  static async getInitialProps({ req }) {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    console.log(this.props);
    return <div>Hello World {this.props.userAgent}</div>;
  }
}

export default Example;
