import { useCallback, useContext } from 'react';
import { TodoDispatchContext } from '../utils/TodoContext';

export const Checkbox = ({ todo }) => {
	const dispatch = useContext(TodoDispatchContext);
	const handleChange = useCallback(
		(e) => {
			dispatch({
				type: 'changed',
				todo: {
					...todo,
					done: e.target.checked,
				},
			});
		},
		[dispatch, todo],
	);
	return (
		<div className="flex flex-row p-2">
			<input
				type="checkbox"
				checked={todo.done}
				className={`
				appearance-none 
				border-4 
				rounded 
				border-black 
				bg-white 
				checked:bg-green-500
				focus-visible:outline-black 
				w-6 
				h-6 
				cursor-pointer
				`}
				onChange={handleChange}
			/>
		</div>
	);
};
