import axiosClient from "../apiClient";

// export function getProduct(){
//     return axiosClient.get('/product');
// }

// export function addProduct(data){
//     return axiosClient.post('/product', JSON.stringify(data));
// }

export function getToDos() {
    return axiosClient.get('/');
}

export function deleteTodo(todo) {
    const requestBody = todo;

    return axiosClient.delete('/', { data: 
        {todo: '1234', priority: 2} });
}