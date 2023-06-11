import { useContext, useState } from 'react';
import { TodoDispatchContext } from '../utils/TodoContext';
export const TodoItem = ({ todo, setIsEditing }) => {
	const [name, setName] = useState(todo.name);
	const dispatch = useContext(TodoDispatchContext);
	const handleSave = () => {
		dispatch({
			type: 'changed',
			todo: {
				...todo,
				name: name,
			},
		});
		setIsEditing(false);
	};
	return (
		<>
			<input
				value={name}
				className="flex flex-row ml-auto uppercase font-mono font-medium rounded placeholder-black w-full p-2.5 focus-visible:outline-black bg-amber-200"
				onChange={(e) => setName(e.target.value)}
			/>
			<button
				className="bg-green-500 p-2 uppercase font-mono rounded focus-visible:outline-black ml-1"
				onClick={handleSave}
			>
				Save
			</button>
		</>
	);
};
