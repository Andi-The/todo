import React from 'react';
import Button from 'react-bootstrap/Button';
import { deleteTodo } from '../network/lib/todos';
import classNames from 'classnames'

function ListElement({ todo, refetch }) {
	
	function renderPriority(){
		switch(todo.priority) {
			case 0:
				return "sehr gering"
			case 1:
				return "gering"
			case 2:
				return "mittel"
			case 3:
				return "hoch"
			case 4:
				return "sehr hoch"
			default:
				if(todo.priority <= 0) {
					return "sehr gering"
				}
				return "sehr hoch"
		}
	}

	return (
		<div className={classNames({
			"card w-75 m-1 mx-auto": true,
			light_green: (todo.priority <= 0),
			green: (todo.priority === 1),
			yellow: (todo.priority === 2),
			orange: (todo.priority === 3),
			red: (todo.priority >= 4)
			})}>
			<div className="card-body">
				<div className="row">
					<h5 className="card-title col-10">{todo.todo}</h5>
					<Button
						className="col-2"
						onClick={() => {
							deleteTodo(todo).then((res) => {
								if(Math.floor(res.status / 100) === 2) {
									refetch();
								}
							});
							}
						}
					>
						Erledigt
					</Button>
				</div>
				<div className="row">
					{renderPriority()}
				</div>
			</div>
		</div>
	);
}

export default ListElement;
