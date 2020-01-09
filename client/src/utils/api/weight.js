import axios from "axios";

const weight = {
    get: function () {
        return axios.get("/api/user/weights");
    },
    getOne: function (id) {
        return axios.get("/api/user/weights" + id);
    },
    delete: function(id) {
        return axios.delete("/api/user/weights/" + id);
    },
    save: function (weightData) {
        return axios.post("/api/user/weights", weightData);
    }
}

export default weight;