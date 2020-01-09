import axios from "axios";

const user = {
    //get users
get: function () {
    return axios.get("/api/user");
},
//get a user
getOne: function (id) {
    return axios.get("/api/user" + id);
},
//delete a user
delete: function(id) {
    return axios.delete("/api/user/" + id);
},
//save a user
save: function (userData) {
    return axios.post("/api/user", userData);
}
}

export default user;