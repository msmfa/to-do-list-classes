import React, { Component } from "react";

/*

*/

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "take out the trash",
        completed: false
      },
      {
        id: 2,
        title: "Learn React",
        completed: false
      },
      {
        id: 3,
        title: "Play Monopoly",
        completed: false
      }
    ]
  };

  markComplete = () => {
    console.log(this.title);
  };

  render() {
    console.log(this.state.todos);
    return (
      <>
        <div className="App"></div>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </>
    );
  }
}

//We pass the state into the Todo componant above and call the
//object state "todos" which is now an object

//The object then needs to be mapped over in order
//to return the individual elements

//The idea is to keep passing these things into
//modules to keep them separate

class Todos extends Component {
  render() {
    return this.props.todos.map(item => (
      <TodoItem
        key={item.id}
        todo={item}
        markComplete={this.props.markComplete}
      />
    ));
  }
}

class TodoItem extends Component {
  getStyle = () => {
    if (this.props.todo.completed)
      return {
        textDecoration: "line-through"
      };
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <h2>
          <input type="checkbox" onChange={this.props.markComplete}></input>

          {this.props.todo.title}
        </h2>
      </div>
    );
  }
}

export default App;
