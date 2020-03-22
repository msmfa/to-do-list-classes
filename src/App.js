import React, { Component, useEffect } from "react";

import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid"

const LOCAL_STORAGE_KEY = "todoapp.todos"

class App extends Component {

  state = {
    todos: []
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

  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
    return (
      <>
        <Header />
        <Addtodo addTodo={this.addTodo} />
        <div className="App">
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteTodo={this.deleteTodo}
          />
        </div>
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
        textDecoration: "line-through",
        color: "rgb(202, 202, 202)"
      };
  };

  render() {
    const { id, title } = this.props.todo;

    return (
      <div>
        <h2 className="container">

          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
            className="checkbox"
          ></input>
          <div style={this.getStyle()} className="to-do-text">
            {title}
          </div>

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

class Addtodo extends Component {

  state = {
    title: ""
  }

  OnSubmit = e => {
    e.preventDefault();
    if (this.state.title === "") {
      return
    } else {
      this.props.addTodo(this.state.title);
      this.setState({ title: "" });
    }
  };


  OnChange = (e) => this.setState({
    title: e.target.value
  })

  render() {
    return (
      <form className="form-container" onSubmit={this.OnSubmit}>
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Add To Do..."
          value={this.state.title}
          onChange={this.OnChange}
        ></input>
        <input className="Add-todo" type="submit" value="Submit"></input>
      </form>
    );
  }
}

export default App;
