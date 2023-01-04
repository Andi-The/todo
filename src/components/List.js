import ListElement from './ListElement';
function List({ todos, refetch }) {
	if (todos === null || todos.length === 0)
		return (
			<div className="card w-75 m-1 mx-auto">
				<div className="card-body">
					<h5 className="card-title">Keine ToDos</h5>
				</div>
			</div>
		);
	return <div className="">{todos.map((todo) => <ListElement key={todo.todo} todo={todo} refetch={refetch}/>)}</div>;
}

export default List;
