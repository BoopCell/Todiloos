import React from 'react';
const TodoEditor = React.memo(({ name, setIsEditing }) => (
	<>
		<p className="text-left w-full p-2.5">{name}</p>
		<button
			className="bg-amber-200 rounded uppercase ml-auto p-2"
			onClick={() => setIsEditing(true)}
		>
			Edit
		</button>
	</>
));

export { TodoEditor };
