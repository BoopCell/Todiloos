import { useContext, useState } from 'react';
import { TodoDispatchContext } from '../utils/TodoContext';

const AddTodo = () => {
	let nextId = 5;
	const [todoName, setTodoName] = useState('');
	const dispatch = useContext(TodoDispatchContext);
	const handleAddTodo = (name, e) => {
		e.preventDefault();
		if (name.length > 0) {
			dispatch({
				type: 'added',
				id: nextId++,
				name: name,
			});
			setTodoName('');
		}
	};

	return (
		<>
			<form className="flex" onSubmit={(e) => handleAddTodo(todoName, e)}>
				<button
					className=" bg-green-500 text-black font-bold text-xl font-mono uppercase rounded border-2 border-amber-200 my-1 py-2 px-4 focus-visible:outline-black mr-2"
					type="submit"
				>
					+
				</button>
				<input
					type="text"
					placeholder="Enter new todiloo..."
					value={todoName}
					onChange={(e) => setTodoName(e.target.value)}
					className="uppercase font-mono font-medium rounded placeholder-black my-1 w-full p-2.5 focus-visible:outline-black bg-amber-200"
				/>
			</form>
		</>
	);
};

export default AddTodo;
