import task from "./api/task";
import user from "./api/user";
import weight from "./api/weight";

//use API.js to pull information from db
//each object (task, user, weight) has a
    //get, getOne, delete, and save method

export default {
    task,
    user,
    weight
}