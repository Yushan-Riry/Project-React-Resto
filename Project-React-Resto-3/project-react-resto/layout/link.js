const url   = "http://localhost:8000/api";
let token = "yZKoio3IddXBOSuL11xp2FC10211XW5mrobC8EZl";

    export const link = axios.create({
        baseURL     : url,
        headers     : {
            'api_token' : token
        }
    });