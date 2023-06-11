import { useState, useRef } from 'react';
import { DeleteButton } from './DeleteButton';
import { TodoEditor } from './TodoEditor';
import { Checkbox } from './Checkbox';
import { TodoItem } from './TodoItem';
export const Todo = ({ todo }) => {
	const [isEditing, setIsEditing] = useState(false);
	const renderCounter = useRef(0);
	renderCounter.current = renderCounter.current + 1;
	console.log(`Rendered ${renderCounter.current}`);
	let todoContext;
	isEditing
		? (todoContext = <TodoItem todo={todo} setIsEditing={setIsEditing} />)
		: (todoContext = (
				<TodoEditor name={todo.name} setIsEditing={setIsEditing} />
		  ));
	return (
		<li
			className={`rounded bg-white bg-opacity-${
				todo.done ? '50' : '0'
			} p-1 my-1 font-mono align-baseline uppercase`}
		>
			<form className="flex flex-row">
				<Checkbox todo={todo} />
				{todoContext}
				<DeleteButton id={todo.id} />
			</form>
		</li>
	);
};
