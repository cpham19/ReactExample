import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log("App - CREATED");
  }

  componentDidMount() {
    console.log("App - MOUNTED");
  }

  // constructor(props) {
  //   super(props);
  // }

  deleteButton = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  resetButtons = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  incrementCounter = counter => {
    // Cloning
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  render() {
    console.log("App - RENDERED");

    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.resetButtons}
            onIncrement={this.incrementCounter}
            onDelete={this.deleteButton}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
