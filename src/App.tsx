import React, { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Backdrop from "./components/Backdrop";
import ErrorModal from "./components/ErrorModal";
import { Todo } from "./todo.model";
import { CSSTransition } from "react-transition-group";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState<boolean>(false);

  const todoAddHandler = (text: string) => {
    if (text === "") {
      setError(true);
    } else {
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: Math.random().toString(), text: text },
      ]);
    }
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((prevTodo) => prevTodo.id !== todoId);
    });
  };

  const onClickBackdrop = () => setError(false);

  return (
    <div className='App'>
      {error && <Backdrop onClick={onClickBackdrop} />}
      <CSSTransition
        in={error}
        unmountOnExit
        timeout={1000}
        mountOnEnter
        classNames='my-node'
      >
        <ErrorModal onClick={onClickBackdrop} />
      </CSSTransition>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
