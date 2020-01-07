import axios from "axios";

const task =  {
    get: function () {
        return axios.get("/api/tasks");
    },
    //get task
    getOne: function (id) {
        return axios.get("/api/tasks" + id);
    },
    //delete tasks
    delete: function(id) {
        return axios.delete("/api/tasks/" + id);
    },
    //save a task
    save: function (taskData) {
        return axios.post("/api/tasks", taskData);
    }
}

export default task;