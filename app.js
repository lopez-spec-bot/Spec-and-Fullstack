import { useState } from 'react';
 import ToDo from './components/todo';
 import Input from './components/input';

 function App() {
   const [todos, setToDos] = useState([
 @@ -64,14 +65,34 @@ function App() {
       "completed": true
     }]);

     let current_id = todos.length + 1;

     console.log(todos);
     console.log(setToDos);

     const deleteToDo = (id) => {
       const newTodos = todos.filter((todo) => todo.id !== id);

       setToDos(newTodos);
     };

     const submitTodo = (todo) => {
       const newTodo = {
         "userId": 1,
         "id": current_id,
         "title": todo,
         "completed": true
       };

       current_id += 1;
       // add a link to explain the spread operator

       setToDos([...todos, newTodo]);
     };

   return (
     <div className="App">
       <Input submitToDo={submitTodo} />
       {todos.map(todo => {
         return (
           <ToDo todo={todo} deleteToDo={deleteToDo} />