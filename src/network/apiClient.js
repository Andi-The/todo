import axios from 'axios';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const axiosClient = axios.create({
	baseURL: `http://localhost:8080/todos`,
	withCredentials: false,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export default axiosClient;