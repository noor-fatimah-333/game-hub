import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params : {
        key : 'e498258f4cab4163afeb8fa35dfb6f52'
    }
})