import axios from "axios";

const weight = {
    get: function () {
        return axios.get("/api/user/weight");
    },
    getOne: function (id) {
        return axios.get("/api/user/weight" + id);
    },
    delete: function(id) {
        return axios.delete("/api/user/weight/" + id);
    },
    save: function (weightData) {
        return axios.post("/api/user/tasks", weightData);
    }
}

export default weight;