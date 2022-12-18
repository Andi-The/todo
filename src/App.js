import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './components/List';
import { getToDos } from './network/lib/todos';

function App() {
	const [ data, setData ] = useState(null);
	const [ loading, setLoading ] = useState(true);
	const [ error, setError ] = useState(null);
	useEffect(
		() => {
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
		},
		[]
	);

	if (loading) return <h1> LOADING...</h1>;

	if (error) console.log(error);
	return (
		<div className="container text-center">
			<h1>TODO-APP by Andi</h1>
			<List todos={data}/>
			{console.log(data)}
		</div>
	);
}

export default App;
