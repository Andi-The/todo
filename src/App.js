import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './components/List';
import { getToDos } from './network/lib/todos';
import AddToDo from './components/AddToDo';

function App() {
	const [ data, setData ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);
	useEffect(() => {
		fetch()
	}, []);

	function fetch() {
		getToDos()
			.then((response) => {
				setData(response.data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}

	return (
		<div className="container text-center">
			<h1>TODO-APP by Andi</h1>
			<AddToDo refetch={fetch}/>
			{(() => {
				if (loading) return <h1> LOADING...</h1>;
				if (error) {
					console.log(error);
					return <h1>Fehler beim laden der ToDos</h1>;
				}
				return <List todos={data} refetch={fetch} />;
			})()}
			{console.log(data)}
		</div>
	);
}

export default App;
