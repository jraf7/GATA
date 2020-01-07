import axios from "axios";

const weight = {
    get: function () {
        return axios.get("/api/weight");
    },
    getOne: function (id) {
        return axios.get("/api/weight" + id);
    },
    delete: function(id) {
        return axios.delete("/api/weight/" + id);
    },
    save: function (weightData) {
        return axios.post("/api/tasks", weightData);
    }
}

export default weight;