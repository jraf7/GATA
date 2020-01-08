import axios from "axios";

const journal =  {
    get: function () {
        return axios.get("/api/user/journal");
    },
    //get task
    getOne: function (id) {
        return axios.get("/api/user/journal" + id);
    },
    //delete tasks
    delete: function(id) {
        return axios.delete("/api/user/journal/" + id);
    },
    //save a task
    save: function (taskData) {
        return axios.post("/api/user/journal", taskData);
    }
}

export default task;