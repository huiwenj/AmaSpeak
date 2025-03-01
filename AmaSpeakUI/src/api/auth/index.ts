import http from "../../util/http";

export const login = (username: string, password: string) => {
    return http.post('/api/v1/auth/login', { username, password });
};
