import { useContext } from 'react';
import { TodoContext } from '../utils/TodoContext';
import { Todo } from '../components/Todo';

const TodoList = () => {
	const todos = useContext(TodoContext);
	return (
		<ul className="overflow-y-scroll">
			{todos.map((todo) => (
				<Todo key={`${todo.id}-${todo.name}`} todo={todo} />
			))}
		</ul>
	);
};

export default TodoList;
