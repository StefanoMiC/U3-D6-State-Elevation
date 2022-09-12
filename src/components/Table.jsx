import { Component } from "react";
import { ListGroup } from "react-bootstrap";
class Table extends Component {
  // state = {
  //   selected: null,
  // };

  checkSelected = value => (value === this.props.selected ? "selected" : "");

  render() {
    return (
      <>
        <ListGroup>
          <ListGroup.Item
            onClick={() => this.props.triggerState("First")}
            className={this.checkSelected("First")}
          >
            First
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => this.props.triggerState("Second")}
            className={this.checkSelected("Second")}
          >
            Second
          </ListGroup.Item>
          <ListGroup.Item
            onClick={() => this.props.triggerState("Third")}
            className={this.checkSelected("Third")}
          >
            Third
          </ListGroup.Item>
        </ListGroup>
        <p className="mt-3">
          {this.props.selected ? `Local state is ${this.props.selected}` : "No item selected yet"}
        </p>
      </>
    );
  }
}

export default Table;
