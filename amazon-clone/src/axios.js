import axios from "axios";
const instance =axios.create({
    baseURL:'http://127.0.0.1:5001/clone-c3164/us-central1/api'// The api {cloud functions} url
    // baseURL: 'http://127.0.0.1:4040'
});
export default instance;
