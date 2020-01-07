import axios from "axios";

const user = {
    //get users
get: function () {
    return axios.get("/api/users");
},
//get a user
getOne: function (id) {
    return axios.get("/api/users" + id);
},
//delete a user
delete: function(id) {
    return axios.delete("/api/users/" + id);
},
//save a user
save: function (taskData) {
    return axios.post("/api/users", taskData);
}
}

export default user;