import './App.css';
import { useReducer } from 'react';
import TodoList from './components/TodoList';
import { TodoContext } from './utils/TodoContext';
import { TodoDispatchContext } from './utils/TodoContext';
import AddTodo from './components/AddTodo';
const initialTodos = [
	{ id: 0, name: 'Wake Up', done: false },
	{ id: 1, name: 'Eat', done: false },
	{ id: 2, name: 'Drink', done: false },
	{ id: 3, name: 'Sleep', done: false },
	{ id: 4, name: 'Repeat', done: false },
];
const App = () => {
	const [todos, dispatch] = useReducer(todoReducer, initialTodos);
	return (
		<TodoContext.Provider value={todos}>
			<TodoDispatchContext.Provider value={dispatch}>
				<div className="bg-black text-center min-h-screen flex justify-center">
					<img
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-screen"
						alt="moving cloud background"
						src="./sky-clouds-gif.gif"
					/>
					<div className="fixed w-screen h-screen md:h-auto md:my-40 max-h-screen min-h-0 flex flex-col justify-center md:w-1/2 p-8 z-10 bg-black bg-opacity-80">
						<h1 className="font-bold text-6xl mb-6 font-mono uppercase text-amber-100">
							Todiloos
						</h1>
						<AddTodo />
						<TodoList />
					</div>
				</div>
			</TodoDispatchContext.Provider>
		</TodoContext.Provider>
	);
};
const todoReducer = (todo, action) => {
	switch (action.type) {
		case 'added': {
			return [
				...todo,
				{
					id: action.id,
					name: action.name,
					done: false,
				},
			];
		}
		case 'changed': {
			return todo.map((t) => {
				if (t.id === action.todo.id) {
					console.log(action.todo);
					return action.todo;
				} else {
					return t;
				}
			});
		}
		case 'deleted': {
			return todo.filter((t) => t.id !== action.id);
		}
		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
};
export default App;
