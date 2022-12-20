const baseUrl = "http://localhost:3005/api";

export const getAll = () => fetch(`${baseUrl}/users`).then(res => res.json()); 
export const getOne = (userId) => fetch(`${baseUrl}/users/${userId}`).then(res => res.json());