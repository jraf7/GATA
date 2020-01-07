import axios from "axios";

export default {
    //get tasks
    getTasks: function () {
        return axios.get("/api/tasks");
    },
    //get task
    getTask: function (id) {
        return axios.get("/api/tasks" + id);
    },
    //delete tasks
    deleteTask: function(id) {
        return axios.delete("/api/tasks/" + id);
    },
    //save a task
    saveTask: function (taskData) {
        return axios.post("/api/tasks", taskData);
    },

    //get users
    getUsers: function () {
        return axios.get("/api/users");
    },
    //get a user
    getUser: function (id) {
        return axios.get("/api/users" + id);
    },
    //delete a user
    deleteUser: function(id) {
        return axios.delete("/api/users/" + id);
    },
    //save a user
    saveUser: function (taskData) {
        return axios.post("/api/users", taskData);
    }
}