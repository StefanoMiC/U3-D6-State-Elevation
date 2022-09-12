import "./App.css";
import { Col, Container, Row } from "react-bootstrap";
import Table from "./components/Table";
import Detail from "./components/Detail";
import { Component } from "react";

class App extends Component {
  // Move the state from Table to here. But since this is a functional component, it cannot have a state yet.
  // First step: convert the functional syntax to a class
  state = {
    selected: null,
  };

  // this.setState({selected: "First"})

  changeSelected = newValue => {
    this.setState({ selected: newValue });
  };

  // changeSelected is a function living in the App component
  // because it's invoking this.setState(),
  // and you want to call setState in the same level you want the state to be changed!

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Col>
                <Table
                  selected={this.state.selected} // READ
                  triggerState={this.changeSelected} // WRITE
                />
                {/* f(){} */}
              </Col>
              <Col className="my-auto">
                <Detail selected={this.state.selected} />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
