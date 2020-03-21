import React, { Component } from "react";

/*

*/

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn React",
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

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      })
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(item => item.id !== id)]
    });
  };

  render() {
    return (
      <>
        <div className="App"></div>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
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
        deleteTodo={this.props.deleteTodo}
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
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <h2>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          ></input>

          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            className="delete-button"
          >
            X
          </button>
        </h2>
      </div>
    );
  }
}

export default App;
