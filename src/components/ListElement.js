import React from 'react';
import Button from 'react-bootstrap/Button';
import { deleteTodo } from '../network/lib/todos';

function ListElement({ todo }) {
	return (

			<div className="card w-75 m-1 mx-auto">
				<div className="card-body">
					<h5 className="card-title">{todo.todo}</h5>
					<Button onClick={() => {deleteTodo(todo)}}>Erledigt</Button>
				</div>
			</div>

	);
}

export default ListElement;
