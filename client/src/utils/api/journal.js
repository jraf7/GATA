import axios from "axios";

const journal = {
    get: function () {
        return axios.get("/api/user/journals");
    },
    //get task
    getOne: function (id) {
        return axios.get("/api/user/journals" + id);
    },
    //delete tasks
    delete: function (id) {
        return axios.delete("/api/user/journals/" + id);
    },
    //save a task
    save: function (taskData) {
        return axios.post("/api/user/journals", taskData);
    }
}

export default journal;