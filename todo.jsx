const ToDo = ({ todo, deleteToDo }) => {
    const { id, title } = todo;
    return (
        <div>
            <span>{title}</span>
            <button onClick={() => deleteToDo(id)}>X</button>
            <span>{todo.title}</span>
            <button onClick={() => deleteToDo(todo.id)}>X</button>
        </div>
    )
};