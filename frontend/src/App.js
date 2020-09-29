import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = { serverResponse:[] };
  }

  callAPIServer() {
      fetch("http://localhost:7000/users")
          .then(res => res.json())
          .then(res => this.setState({ serverResponse: res }))
          .catch(err => err);
  }
  componentDidMount() {   // react lifecycle method componentDidMount() 
                        //will execute the callAPIserver() method after the component mounts.
      this.callAPIServer();

  }
  render() {
      return (
          <div className="App">
              <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">NUS MONEY APP User List</h1>
              <table>
                  <tr>
                      <th>User ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>NRIC</th>
                    </tr>
              </table>
              {this.state.serverResponse.map(user=>
                {
                  return <table>
                      <tr>
                          <td>{user.user_id}</td>
                          <td>{user.NAME}</td>
                          <td>{user.EMAIL}</td>
                          <td>{user.MOBILE}</td>
                          <td>{user.NRIC}</td>
                      </tr>
                  </table>
                }
              )}
              </header>
          </div>
      );
  }
}

export default App;