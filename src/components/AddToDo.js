import React from 'react';
import { useId, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { postTodo } from '../network/lib/todos';

const AddToDo = ({ refetch }) => {
	const todo_text_id = useId();
	const todo_priority_id = useId();
	const [ todoText, setTodoText ] = useState('Einkaufen');
	const [ todoPriority, setTodoPriority ] = useState(2);

	return (
		<div className="card w-75 m-1 mx-auto">
			<div className="card-body">
				<div className="row">
					<div className="row g-2">
						<div className="col-md">
							<div className="form-floating">
								<input
									type="text"
									className="form-control"
									id={todo_text_id}
									placeholder="Einkaufen"
									value={todoText}
									onInput={(e) => setTodoText(e.target.value)}
								/>
								<label htmlFor={todo_text_id}>Neues ToDo erstellen:</label>
							</div>
						</div>
						<div className="col-md">
							<div className="form-floating">
								<select
									className="form-select"
									defaultValue={todoPriority}
									id={todo_priority_id}
									onChange={(change) => {
										setTodoPriority(change.target.value);
									}}
								>
									<option value="0">sehr gering</option>
									<option value="1">gering</option>
									<option value="2">mittel</option>
									<option value="3">hoch</option>
									<option value="4">sehr hoch</option>
								</select>
								<label htmlFor={todo_priority_id}>Priorität</label>
							</div>
						</div>
					</div>
					<Button
						className="col-2"
						onClick={() => {
							postTodo(todoText, todoPriority).then((res) => {
								if (Math.floor(res.status / 100) === 2) {
									refetch();
								}
							});
						}}
					>
						Speichern
					</Button>
				</div>
			</div>
		</div>
	);
};

export default AddToDo;
