import axios from "axios";

export const client = axios.create({
    baseURL: `http://Rebalancebackend-env.eba-s5nfhdrn.eu-west-3.elasticbeanstalk.com`,
    timeout: 1000,
    headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzYyODE1OTQsIm5iZiI6MTYzNjI4MTU5NCwianRpIjoiZTJjMDk0OTgtNDViZi00NDM0LWJiYTMtNjFhZjg5NDk0N2U3IiwiZXhwIjoxNjM2MzY3OTk0LCJpZGVudGl0eSI6InJlYmFsYW5jZUBkZW1vLmNvbSIsImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.jtxTmnrPsSg6_O3-D7D5nA8BAeL3bgfK1uOSNKsx_P4`,
        'Access-Control-Allow-Origin': '*',
    }
});

