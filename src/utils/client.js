import axios from "axios";

export const client = axios.create({
    baseURL: `http://Rebalancebackend-env.eba-s5nfhdrn.eu-west-3.elasticbeanstalk.com`,
    timeout: 1000,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzU1MTMxMzMsIm5iZiI6MTYzNTUxMzEzMywianRpIjoiZmYzMTM1ZWYtYTNhNS00NWZjLTg1ZWUtMjc5MWJmMjA0NjQ0IiwiZXhwIjoxNjM1NTk5NTMzLCJpZGVudGl0eSI6InJlYmFsYW5jZUBkZW1vLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.0H-2GkBiHe0EOtT3-Cne4oR14X9Gmkc3fCrgeIstCO0`
    }
});

