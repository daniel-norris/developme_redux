// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    baseURL: "https://restful.training/api/ping-pong",
    headers: {
        // make sure we get JSON back
        Accept: "application/json",

        // use your own key
        Authorization: "Bearer XWn1JOebYDE7CHVk27shzUI2ZJGONzIoTt3skh2tzAbqDJzMlwTM16qFHsimEHwZhhIgXt64Eb3ipUxp",
    },
});