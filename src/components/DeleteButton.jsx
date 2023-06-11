import { useContext } from 'react';
import { TodoDispatchContext } from '../utils/TodoContext';

export const DeleteButton = ({ id }) => {
	const dispatch = useContext(TodoDispatchContext);
	return (
		<button
			className="bg-rose-400 p-2 rounded uppercase mx-1"
			onClick={() => {
				dispatch({
					type: 'deleted',
					id: id,
				});
			}}
		>
			Delete
		</button>
	);
};
