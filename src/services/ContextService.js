const baseUrl = "http://localhost:3005/api";

export const getAll = () => fetch(`${baseUrl}/users`).then(res => res.json()); 