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
    return axiosClient.delete('/', { data: todo });
}

export function postTodo(text, priority) {
    const todo = {
        "todo": text,
        "priority": priority
        }
    return axiosClient.post('/', todo);
}