import axios from "axios";

/** base url for making request */

const instance = axios.create({
    baseURL: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content'
});

export default instance;