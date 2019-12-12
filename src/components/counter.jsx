import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from server
    }
  }

  componentWillUnmount() {
    console.log("Counter - UNMOUNTED");
  }

  // state = {
  //   message: "Hello",
  //   names: ["Al", "Ben", "Calvin"],
  //   value: this.props.counter.value
  // };

  // changeWord = product => {
  //   console.log(product);
  //   if (this.state.message === "Hello") {
  //     this.setState({ message: <h1>World</h1> });
  //   } else {
  //     this.setState({ message: "Hello" });
  //   }
  // };

  render() {
    console.log("Counter - RENDERED");

    return (
      <React.Fragment>
        {/* {this.props.children} */}

        {/* <span style={this.styles} className={this.getBadgeClasses()}>
          {this.state.message}
        </span>
        <br />
        <button onClick={() => this.changeWord({ test: 5 })}>
          CHANGE WORD
        </button>

        {this.renderNames()} */}

        <p>
          <span className="badge badge-primary m-2">
            {this.props.counter.value}
          </span>
          <button
            className="btn btn-primary"
            onClick={() => this.props.onIncrement(this.props.counter)}
          >
            Increment
          </button>
          <button
            className="btn btn-danger"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
        </p>
      </React.Fragment>
    );
  }

  // renderNames() {
  //   if (this.state.names.length === 0) return <p>There are no names!</p>;

  //   return (
  //     <ul>
  //       {" "}
  //       {this.state.names.map(name => (
  //         <li key={this.state.names.indexOf(name)}>{name}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // getBadgeClasses() {
  //   let classes = "badge m-2 badge-";
  //   classes += this.state.message === "Hello" ? "warning" : "primary";
  //   return classes;
  // }
}

export default Counter;
